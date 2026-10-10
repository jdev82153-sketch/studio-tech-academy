
"use strict";

const WHATSAPP_NUMERO = "5511982190060";
const WHATSAPP_MENSAGEM =
  "Olá! Conheci o Studio Tech Trainner pelo site e gostaria de conhecer os treinamentos, valores e horários disponíveis.";

function abrirWhatsApp(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const mensagem = encodeURIComponent(WHATSAPP_MENSAGEM);
  const link = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + mensagem;

  window.location.assign(link);
}

document.addEventListener("DOMContentLoaded", function () {
  // Menu de três barrinhas
  const menuBotao = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (menuBotao && menu) {
    menuBotao.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      menu.classList.toggle("active");

      menuBotao.setAttribute(
        "aria-expanded",
        menu.classList.contains("active") ? "true" : "false"
      );
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuBotao.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Botões e links de WhatsApp
  document.querySelectorAll(
    ".whatsapp-link, #contact-button, #floating-whatsapp"
  ).forEach(function (botao) {
    botao.addEventListener("click", abrirWhatsApp);
  });

  // Ano do rodapé
  document.querySelectorAll("#current-year").forEach(function (elemento) {
    elemento.textContent = new Date().getFullYear();
  });
});
