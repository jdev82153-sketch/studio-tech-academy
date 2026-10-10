
/* ========================================
   STUDIO TECH TRAINNER
   Menu responsivo e contato via WhatsApp
======================================== */

/* CONFIGURAÇÃO DO WHATSAPP */
const STUDIO_CONFIG = {
  whatsapp: "", // Coloque o número com DDI e DDD, somente números.
  mensagem:
    "Olá! Conheci o Studio Tech Trainner pelo site e gostaria de saber mais sobre os treinamentos."
};

/* ELEMENTOS */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const contactButton = document.getElementById("contact-button");

/* ========================================
   MENU PARA CELULAR
======================================== */

function closeMenu() {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

function openMenu() {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.add("active");
  menuToggle.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Fechar menu");
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("active");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Fecha o menu ao selecionar uma seção.
  navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Fecha o menu com a tecla Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Evita manter o menu mobile aberto ao ampliar a tela.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });

  // Fecha ao clicar fora do menu.
  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });
}

/* ========================================
   BOTÃO DE CONTATO
======================================== */

if (contactButton) {
  contactButton.addEventListener("click", (event) => {
    event.preventDefault();

    const phone = STUDIO_CONFIG.whatsapp.replace(/\D/g, "");

    if (!phone) {
      alert(
        "O WhatsApp do studio ainda não foi configurado. " +
        "Adicione o número no arquivo script.js."
      );
      return;
    }

    const message = encodeURIComponent(STUDIO_CONFIG.mensagem);
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

/* ========================================
   ANO AUTOMÁTICO NO RODAPÉ
======================================== */

const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* ========================================
   FECHAMENTO INICIAL DO MENU
======================================== */

closeMenu();
