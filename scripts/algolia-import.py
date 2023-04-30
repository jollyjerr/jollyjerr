import os
import markdown
import pathlib
from algoliasearch.search_client import SearchClient


def walk_dir(path):
    return [(os.path.join(dirpath, filename), filename) for (dirpath, dirnames, filenames)
            in os.walk(path) for filename in filenames]


client = SearchClient.create(os.environ['ALGOLIA_APPLICATION_ID'], os.environ['ALGOLIA_API_KEY'])

blogs_index = client.init_index('blogs')
notes_index = client.init_index('notes')

blogs = []
for (path, filename) in walk_dir('./posts'):
    md = markdown.Markdown(extensions=['meta'])
    md.convert(pathlib.Path(path).read_text(encoding='utf-8'))
    meta = md.Meta
    if meta['draft'][0] == 'false':
        blogs.append({
            'objectID': meta['title'][0],
            'title': meta['title'][0],
            'date': meta['date'][0],
            'tags': meta['tags'],
            'slug': ''.join(filename.split('.md'))
        })

notes = []
for (path, filename) in walk_dir('./knowledge'):
    if ".md" in filename and filename[0] != ".":
        notes.append({
            'objectID': filename,
            'title': ' '.join(filename.split('.md')[0].split("-")),
            'path': path.split('./knowledge/')[1]
        })

blogs_index.save_objects(blogs)
notes_index.save_objects(notes)

print(f"Updated {len(blogs)} blogs and {len(notes)} notes 🎉")
