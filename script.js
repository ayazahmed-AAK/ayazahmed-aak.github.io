/* ---------------------------
   DARK MODE TOGGLE
---------------------------- */
function toggleDarkMode() {
    const theme = document.getElementById("theme");
    if (theme.getAttribute("href") === "style.css") {
        theme.setAttribute("href", "dark.css");
    } else {
        theme.setAttribute("href", "style.css");
    }
}

/* ---------------------------
   SCROLL FADE-IN ANIMATIONS
---------------------------- */
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(el => observer.observe(el));
