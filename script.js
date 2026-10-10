
/* =====================================
   STUDIO TECH TRAINNER
===================================== */

/* CONFIGURE O WHATSAPP DO STUDIO */
const STUDIO_CONFIG = {
  whatsapp: "", // Exemplo: "5511999999999"
  mensagem:
    "Olá! Conheci o Studio Tech Trainner pelo site e gostaria de conhecer os treinamentos, valores e horários disponíveis."
};

/* MENU MOBILE */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

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
    event.stopPropagation();
    setMenuOpen(!navMenu.classList.contains("active"));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
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

/* WHATSAPP: TODOS OS BOTÕES */
function openStudioWhatsApp() {
  const phone = STUDIO_CONFIG.whatsapp.replace(/\D/g, "");

  if (!phone) {
    alert(
      "O WhatsApp ainda não foi configurado. " +
      "Adicione o número do studio no arquivo script.js."
    );
    return;
  }

  const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(STUDIO_CONFIG.mensagem);

  window.open(url, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(
  ".whatsapp-link, #contact-button, #floating-whatsapp"
).forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openStudioWhatsApp();
  });
});

/* ANO AUTOMÁTICO */
const year = document.getElementById("current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}
