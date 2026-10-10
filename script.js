
"use strict";

const STUDIO_CONFIG = {
  whatsapp: "5511982190060",
  mensagem:
    "Olá! Conheci o Studio Tech Trainner pelo site e gostaria de conhecer os treinamentos, valores e horários disponíveis."
};

function abrirWhatsApp(event) {
  event.preventDefault();

  const numero = STUDIO_CONFIG.whatsapp.replace(/\D/g, "");
  const texto = encodeURIComponent(STUDIO_CONFIG.mensagem);

  if (!numero) return;

  window.location.href = `https://wa.me/${numero}?text=${texto}`;
}

function iniciarSite() {
  // MENU MOBILE
  const menuBotao = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (menuBotao && menu) {
    menuBotao.onclick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      const aberto = menu.classList.toggle("active");
      menuBotao.setAttribute("aria-expanded", String(aberto));
    };

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
        menuBotao.setAttribute("aria-expanded", "false");
      });
    });
  }

  // TODOS OS LINKS DE WHATSAPP
  document.querySelectorAll(".whatsapp-link").forEach(function (botao) {
    botao.addEventListener("click", abrirWhatsApp);
  });

  // BOTÃO PRINCIPAL DE CONTATO
  const contato = document.getElementById("contact-button");

  if (contato) {
    contato.addEventListener("click", abrirWhatsApp);
  }

  // BOTÃO FLUTUANTE
  const flutuante = document.getElementById("floating-whatsapp");

  if (flutuante) {
    flutuante.addEventListener("click", abrirWhatsApp);
  }

  // ANO DO RODAPÉ
  document.querySelectorAll("#current-year").forEach(function (elemento) {
    elemento.textContent = new Date().getFullYear();
  });

  console.log("Studio Tech Trainner carregado.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarSite);
} else {
  iniciarSite();
}
