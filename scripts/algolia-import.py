import markdown
import os
import pathlib
import re
from algoliasearch.search.client import SearchClientSync
from bs4 import BeautifulSoup
from typing import List

CONTENT_CHUNK_SIZE = 30
BLOGS = 'blogs'
NOTES = 'notes'


def get_env(key: str) -> str:
    value = os.environ[key]
    assert value, f'ERROR: missing required env value {key}'
    return value


def walk_dir(path: str) -> List[str]:
    return [(os.path.join(dirpath, filename), filename) for (dirpath, dirnames, filenames)
            in os.walk(path) for filename in filenames]


def html_to_safe_text(html: str) -> str:
    soup = BeautifulSoup(html, features='html.parser')

    for code_block in soup.find_all(['code', 'pre']):
        code_block.decompose()
    all_text = soup.get_text()
    return re.sub(r'```[\s\S]+?```', '', all_text)


search_client = SearchClientSync(
    get_env('ALGOLIA_APPLICATION_ID'),
    get_env('ALGOLIA_API_KEY')
)

indexes = [BLOGS, NOTES]

for index in indexes:
    search_client.set_settings(
        index_name=index,
        index_settings={
            'attributeForDistinct': 'title',
            'distinct': True
        }
    )

blogs = []
for (path, filename) in walk_dir('./posts'):
    md = markdown.Markdown(extensions=['meta'])
    html = md.convert(pathlib.Path(path).read_text(encoding='utf-8'))
    meta = md.Meta

    if meta['draft'][0] == 'false':
        all_text = html_to_safe_text(html)
        lines = all_text.splitlines()

        for i in range(0, len(lines), CONTENT_CHUNK_SIZE):
            chunk = lines[i:i + CONTENT_CHUNK_SIZE]
            blogs.append({
                'objectID': f'{meta['title'][0]}-{i}',
                'title': meta['title'][0],
                'date': meta['date'][0],
                'tags': meta['tags'],
                'slug': ''.join(filename.split('.md')),
                'content': ' '.join(chunk)
            })

blogs_response = search_client.batch(
    index_name=BLOGS,
    batch_write_params={
        'requests': [{'action': 'addObject', 'body': blog} for blog in blogs]
    }
)

search_client.wait_for_task(
    index_name=BLOGS,
    task_id=blogs_response.task_id
)

notes = []
for (path, filename) in walk_dir('./knowledge'):
    if ".md" in filename and filename[0] != ".":
        html = md.convert(pathlib.Path(path).read_text(encoding='utf-8'))
        all_text = html_to_safe_text(html)
        lines = all_text.splitlines()

        for i in range(0, len(lines), CONTENT_CHUNK_SIZE):
            chunk = lines[i:i + CONTENT_CHUNK_SIZE]
            notes.append({
                'objectID': f'{filename}-{i}',
                'title': ' '.join(filename.split('.md')[0].split("-")),
                'path': path.split('./knowledge/')[1],
                'content': ' '.join(chunk)
            })

notes_response = search_client.batch(
    index_name=NOTES,
    batch_write_params={
        'requests': [{'action': 'addObject', 'body': note} for note in notes]
    }
)

search_client.wait_for_task(
    index_name=NOTES,
    task_id=notes_response.task_id
)

print(f"Updated {len(blogs)} blogs and {len(notes)} notes 🎉")
