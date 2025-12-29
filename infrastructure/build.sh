if [ "$CF_PAGES_BRANCH" = "main" ]; then zola build; else zola build --base-url $CF_PAGES_URL; fi
