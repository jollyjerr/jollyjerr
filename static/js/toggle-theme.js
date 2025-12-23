function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

const toggleBtn = document.getElementById("theme-toggle");
const sun = document.getElementById("sun-icon");
const moon = document.getElementById("moon-icon");

toggleBtn.addEventListener("click", () => {
    toggleTheme();
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");
});
