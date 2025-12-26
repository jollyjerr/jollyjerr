setup:
  brew install zola
  pip install djhtml
  npm install -g prettier

dev:
  zola serve

build:
  zola build

format:
    djhtml $(find templates -type f -name '*.html')
    prettier --write "**/*.{md,css}"
