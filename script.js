/* DARK MODE TOGGLE */
function toggleDarkMode() {
    const theme = document.getElementById("theme");
    theme.href = theme.href.includes("style.css") ? "dark.css" : "style.css";
}

/* Fade-In Animations */
const els = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
    });
});
els.forEach(el => obs.observe(el));
