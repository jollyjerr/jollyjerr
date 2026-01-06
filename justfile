setup:
  brew install zola
  pip install djhtml
  npm install -g prettier cspell lightningcss-cli

dev: buildcss
  zola serve

build: buildcss
  zola build

buildcss:
  lightningcss --minify --targets "> 0.5%, last 2 versions, not dead" static/css/styles.css -o static/style.min.css

format:
    djhtml $(find templates -type f -name '*.html')
    prettier --write "**/*.{md,json}"
    prettier --write "static/css/styles.css"

spellcheck:
    cspell --no-progress --show-suggestions --show-context "**/*.{md,html}"

ci: format spellcheck build

tfinit:
    cd ./infrastructure && tofu init

tfplan:
    cd ./infrastructure && tofu plan
