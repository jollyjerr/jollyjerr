setup:
  brew install zola
  pip install djhtml

dev:
  zola serve

build:
  zola build

format:
    djhtml $(find templates -type f -name '*.html')
