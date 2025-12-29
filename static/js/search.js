document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("search-input");
    const resultsDiv = document.getElementById("search-results");

    const index = window.elasticlunr.Index.load(window.searchIndex);

    input.addEventListener("input", () => {
        const query = input.value.trim();
        if (!index || query.length < 2) {
            resultsDiv.innerHTML = "";
            return;
        }

        const results = index.search(query, {});
        if (results.length === 0) {
            resultsDiv.innerHTML = "<p>No results found.</p>";
            return;
        }

        const ul = document.createElement("ul");
        ul.className = "category-list";

        results.slice(0, 20).forEach((res) => {
            const doc = res.doc;

            const li = document.createElement("li");
            const a = document.createElement("a");

            a.href = doc.id;
            a.textContent = doc.title;

            li.appendChild(a);
            ul.appendChild(li);
        });

        resultsDiv.innerHTML = "";
        resultsDiv.appendChild(ul);
    });
});
