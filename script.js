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

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//         Header branco
//         headerBg.classList.remove("bg-[#2490E3]");
//         headerBg.classList.add("bg-white");

//         navLinks.classList.remove("text-white");
//         navLinks.classList.add("text-[#092A49]");

//         ctaBtn.classList.remove("bg-[#092A49]", "text-white");
//         ctaBtn.classList.add("bg-[#2490E3]", "text-white");
//     } else {
//         Header azul original
//         headerBg.classList.add("bg-[#2490E3]");
//         headerBg.classList.remove("bg-white");

//         navLinks.classList.add("text-white");
//         navLinks.classList.remove("text-[#092A49]");

//         ctaBtn.classList.add("bg-[#092A49]", "text-white");
//         ctaBtn.classList.remove("bg-[#2490E3]");
//     }
// });

// ANIMAÇÃO DE CONTAGEM PARA A SEÇÃO DE ESTATÍSTICAS

/**
 * Anima um número de 0 até um valor final dentro de um elemento HTML.
 * @param {HTMLElement} el O elemento (ex: <h3>) que contém o texto a ser animado.
 * @param {number} duration A duração da animação em milissegundos.
 */
function animateCountUp(el, duration = 2000) {
    const originalText = el.textContent;
    
    // Extrai o número do texto, removendo caracteres não numéricos.
    let targetNumber = parseInt(originalText.replace(/[^\d]/g, ''), 10);

    // Lida com casos especiais como "mil".
    if (originalText.toLowerCase().includes('mil')) {
        targetNumber *= 1000;
    }

    if (isNaN(targetNumber)) {
        console.error("Não foi possível extrair um número válido de:", originalText);
        return;
    }

    // Separa o prefixo (ex: "+ de ") e o sufixo (ex: " Estados").
    const prefix = originalText.match(/^[^\d]*/)?.[0] || '';
    const suffix = originalText.match(/\d([^\d].*)/)?.[1] || '';

    let startTime = null;

    const step = (currentTime) => {
        if (!startTime) {
            startTime = currentTime;
        }

        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentNumber = Math.floor(progress * targetNumber);

        // Formata o número com separador de milhar (ex: 5.000)
        const formattedNumber = currentNumber.toLocaleString('pt-BR');

        // Remonta o texto com o número atualizado
        el.textContent = `${prefix}${formattedNumber}${suffix}`;

        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            // Garante que o texto final seja exatamente o original para manter a formatação.
            el.textContent = originalText;
        }
    };

    window.requestAnimationFrame(step);
}

// Usa IntersectionObserver para iniciar a animação quando a seção estiver visível.
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.getElementById('stats-section');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const h3Elements = statsSection.querySelectorAll('h3');
                h3Elements.forEach(h3 => animateCountUp(h3));
                observer.unobserve(statsSection); // Anima apenas uma vez
            }
        });
    }, { threshold: 0.5 }); // Inicia quando 50% da seção estiver visível

    observer.observe(statsSection);
});
