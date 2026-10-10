
/*
  STUDIO TECH TRAINNER

  Configure o WhatsApp abaixo:
  Use código do país + DDD + número, somente dígitos.
  Exemplo de formato: 5511999999999

  Deixe vazio enquanto não tiver o número confirmado.
*/

const STUDIO_CONFIG = {
  whatsapp: "",
  mensagem: "Olá! Conheci o Studio Tech Trainner pelo site e gostaria de saber mais sobre os treinamentos."
};

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-ready");

  // MENU MOBILE
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const menuLinks = document.querySelectorAll("#nav-menu a");

  function closeMenu() {
    if (!menuToggle || !navMenu) return;

    menuToggle.classList.remove("active");
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");

      menuToggle.classList.toggle("active", isOpen);
      document.body.classList.toggle("menu-open", isOpen);

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });

    menuLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  // ANIMAÇÕES AO ROLAR A PÁGINA
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }

  // WHATSAPP
  const whatsappLinks = document.querySelectorAll(".whatsapp-link");

  whatsappLinks.forEach(link => {
    link.addEventListener("click", event => {
      const number = String(STUDIO_CONFIG.whatsapp || "").replace(/\D/g, "");

      if (!number) {
        event.preventDefault();
        alert(
          "O WhatsApp do Studio ainda precisa ser configurado no arquivo script.js."
        );
        return;
      }

      if (number.length < 12 || number.length > 13) {
        event.preventDefault();
        alert(
          "Confira o número do WhatsApp no arquivo script.js. Inclua o código do Brasil, o DDD e o telefone."
        );
        return;
      }

      const message = encodeURIComponent(STUDIO_CONFIG.mensagem);
      const url = `https://wa.me/${number}?text=${message}`;

      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  // ANO AUTOMÁTICO NO RODAPÉ
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // DESTAQUE DOS LINKS DE NAVEGAÇÃO
  const sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;

          document.querySelectorAll(".nav-menu > a").forEach(link => {
            if (link.getAttribute("href") === `#${id}`) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px"
      }
    );

    sections.forEach(section => sectionObserver.observe(section));
  }

  console.log("Studio Tech Trainner: página carregada.");
});
    
