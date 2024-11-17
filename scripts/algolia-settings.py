import os
from algoliasearch.search.client import SearchClientSync


def get_env(key: str) -> str:
    value = os.environ[key]
    assert value, f'ERROR: missing required env value {key}'
    return value


search_client = SearchClientSync(
    get_env('ALGOLIA_APPLICATION_ID'),
    get_env('ALGOLIA_API_KEY')
)

indexes = ['blogs', 'notes']

for index in indexes:
    search_client.set_settings(
        index_name=index,
        index_settings={
            'attributeForDistinct': 'title',
            'distinct': True
        }
    )
