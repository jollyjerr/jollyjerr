import os
import markdown
import pathlib
from algoliasearch.search_client import SearchClient

client = SearchClient.create(os.environ['ALGOLIA_APPLICATION_ID'], os.environ['ALGOLIA_API_KEY'])

blogs_index = client.init_index('blogs')
notes_index = client.init_index('notes')

blog_paths = [os.path.join(dirpath, filename) for (dirpath, dirnames, filenames)
              in os.walk('./posts') for filename in filenames]

blogs = []
for path in blog_paths:
    md = markdown.Markdown(extensions=['meta'])
    md.convert(pathlib.Path(path).read_text(encoding='utf-8'))
    meta = md.Meta
    if meta['draft'] is False:
        blogs.append({
            'objectID': meta['title'][0],
            'title': meta['title'][0],
            'date': meta['date'][0],
            'tags': meta['tags'],
        })

note_names = [filename for (dirpath, dirnames, filenames)
              in os.walk('./knowledge') for filename in filenames]

notes = list(map(lambda title: {'objectID': title, 'title': ' '.join(title.split('.md')[0].split("-"))}, filter(
    lambda title: title[0] != ".", note_names)))

blogs_index.save_objects(blogs)
notes_index.save_objects(notes)
