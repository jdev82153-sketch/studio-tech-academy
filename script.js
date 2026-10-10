
/* STUDIO TECH TRAINNER */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const contactButton = document.getElementById("contact-button");

const STUDIO_CONFIG = {
  whatsapp: "", // Coloque o número com código do país e DDD.
  mensagem:
    "Olá! Conheci o Studio Tech Trainner pelo site e gostaria de saber mais sobre os treinamentos."
};

/* MENU MOBILE */
function setMenuOpen(open) {
  if (!menuToggle || !navMenu) return;

  navMenu.classList.toggle("active", open);
  menuToggle.classList.toggle("active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute(
    "aria-label",
    open ? "Fechar menu" : "Abrir menu"
  );
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = navMenu.classList.contains("active");
    setMenuOpen(!isOpen);
  });

  navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) setMenuOpen(false);
  });

  setMenuOpen(false);
}

/* WHATSAPP */
if (contactButton) {
  contactButton.addEventListener("click", (event) => {
    event.preventDefault();

    const phone = STUDIO_CONFIG.whatsapp.replace(/\D/g, "");

    if (!phone) {
      alert(
        "Configure o WhatsApp no arquivo script.js para ativar o contato."
      );
      return;
    }

    const url =
      "https://wa.me/" +
      phone +
      "?text=" +
      encodeURIComponent(STUDIO_CONFIG.mensagem);

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

/* ANO DO RODAPÉ */
const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
