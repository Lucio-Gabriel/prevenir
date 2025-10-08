// MODAL MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
});

// SCRIPT HOVER HEADER BRANCO
const headerBg = document.getElementById("header-bg");
const navLinks = document.getElementById("nav-links");
const ctaBtn = document.getElementById("cta-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // Header branco
        headerBg.classList.remove("bg-[#2490E3]");
        headerBg.classList.add("bg-white");

        navLinks.classList.remove("text-white");
        navLinks.classList.add("text-[#092A49]");

        ctaBtn.classList.remove("bg-[#092A49]", "text-white");
        ctaBtn.classList.add("bg-[#2490E3]", "text-white");
    } else {
        // Header azul original
        headerBg.classList.add("bg-[#2490E3]");
        headerBg.classList.remove("bg-white");

        navLinks.classList.add("text-white");
        navLinks.classList.remove("text-[#092A49]");

        ctaBtn.classList.add("bg-[#092A49]", "text-white");
        ctaBtn.classList.remove("bg-[#2490E3]");
    }
});

