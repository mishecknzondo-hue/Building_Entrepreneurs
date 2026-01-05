// ===== Smooth Scrolling for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== Simple Mobile Menu Toggle (future-ready) =====
const nav = document.querySelector(".nav-links");
const header = document.querySelector("header");

header.addEventListener("dblclick", () => {
    nav.classList.toggle("show");
});

// ===== Footer Year Auto Update =====
const year = new Date().getFullYear();
const footerText = document.querySelector("footer p:last-child");

if (footerText) {
    footerText.innerHTML = `&copy; ${year} Building Entrepreneurs. All rights reserved.`;
}
