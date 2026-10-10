
"use strict";

/* =====================================
   STUDIO TECH TRAINNER
   Configuração do WhatsApp
===================================== */

const STUDIO_CONFIG = {
  whatsapp: "5511982190060",
  mensagem:
    "Olá! Conheci o Studio Tech Trainner pelo site e gostaria de conhecer os treinamentos, valores e horários disponíveis."
};

/* =====================================
   FUNÇÕES DO WHATSAPP
===================================== */

function abrirWhatsApp(event) {
  if (event) {
    event.preventDefault();
  }

  const numero = String(STUDIO_CONFIG.whatsapp || "")
    .replace(/\D/g, "");

  const mensagem = encodeURIComponent(
    STUDIO_CONFIG.mensagem
  );

  if (!numero) {
    console.error("Configure o número do WhatsApp em STUDIO_CONFIG.");
    return;
  }

  const url = `https://wa.me/${numero}?text=${mensagem}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

/* =====================================
   MENU MOBILE
===================================== */

function configurarMenu() {
  const menuBotao = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (!menuBotao || !menu) {
    return;
  }

  menuBotao.addEventListener("click", function () {
    const aberto = menu.classList.toggle("active");

    menuBotao.setAttribute("aria-expanded", String(aberto));
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      menuBotao.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !menu.contains(event.target) &&
      !menuBotao.contains(event.target)
    ) {
      menu.classList.remove("active");
      menuBotao.setAttribute("aria-expanded", "false");
    }
  });
}

/* =====================================
   BOTÕES DE CONTATO
===================================== */

function configurarBotoesWhatsApp() {
  // Todos os links com essa classe abrem o WhatsApp.
  document.querySelectorAll(".whatsapp-link").forEach(function (botao) {
    botao.addEventListener("click", abrirWhatsApp);
  });

  // Botão principal de contato.
  const botaoContato = document.getElementById("contact-button");

  if (botaoContato) {
    botaoContato.addEventListener("click", abrirWhatsApp);
  }

  // Botão flutuante do WhatsApp.
  const botaoFlutuante = document.getElementById("floating-whatsapp");

  if (botaoFlutuante) {
    botaoFlutuante.addEventListener("click", abrirWhatsApp);
  }
}

/* =====================================
   ANO AUTOMÁTICO NO RODAPÉ
===================================== */

function configurarAno() {
  const elementosAno = document.querySelectorAll("#current-year");

  elementosAno.forEach(function (elemento) {
    elemento.textContent = new Date().getFullYear();
  });
}

/* =====================================
   INICIALIZAÇÃO
===================================== */

document.addEventListener("DOMContentLoaded", function () {
  configurarMenu();
  configurarBotoesWhatsApp();
  configurarAno();

  console.log("Studio Tech Trainner: script carregado.");
});
                             
