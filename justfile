setup:
  brew install zola
  pip install djhtml
  npm install -g prettier cspell

dev:
  zola serve

build:
  zola build

format:
    djhtml $(find templates -type f -name '*.html')
    prettier --write "**/*.{md,css,json}"

spellcheck:
    cspell --no-progress --show-suggestions --show-context "**/*.{md,html}"

ci: format spellcheck build

tfinit:
    cd ./infrastructure && tofu init

tfplan:
    cd ./infrastructure && tofu plan
