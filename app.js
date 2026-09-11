const translations = {
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Services",
    navProjects: "Projets",
    navContact: "Contact",

    heroBadge: "Disponible pour de nouveaux projets",
    heroTitle: "Créons quelque chose de vraiment exceptionnel.",
    heroDescription:
      "Je conçois des expériences digitales modernes, rapides et élégantes pour donner vie aux idées et aux entreprises.",
    heroPrimary: "Découvrir mes projets",
    heroSecondary: "Me contacter",

    servicesLabel: "Mes services",
    servicesTitle: "Des solutions pensées pour faire la différence",
    servicesDescription:
      "Chaque projet est conçu avec une attention particulière portée au design, à la performance et à l’expérience utilisateur.",

    serviceOneTitle: "Création de sites web",
    serviceOneDescription:
      "Des sites modernes, responsifs et adaptés à tous les écrans.",
    serviceTwoTitle: "Design UI/UX",
    serviceTwoDescription:
      "Des interfaces claires, élégantes et faciles à utiliser.",
    serviceThreeTitle: "Solutions digitales",
    serviceThreeDescription:
      "Des outils numériques personnalisés pour répondre à vos besoins.",

    aboutLabel: "À propos",
    aboutTitle: "Transformer une idée en expérience digitale.",
    aboutTextOne:
      "Je combine créativité, technologie et stratégie pour créer des produits digitaux utiles et mémorables.",
    aboutTextTwo:
      "Mon objectif est de proposer des solutions simples, efficaces et visuellement fortes.",
    aboutStatOne: "Projets réalisés",
    aboutStatTwo: "Satisfaction",
    aboutStatThree: "Créativité",
    aboutStatFour: "Disponibilité",

    projectsLabel: "Portfolio",
    projectsTitle: "Quelques projets sélectionnés",
    projectsDescription:
      "Une sélection de concepts et de réalisations conçus avec passion.",
    projectOneTitle: "Plateforme digitale",
    projectOneDescription:
      "Une plateforme moderne avec une interface intuitive.",
    projectTwoTitle: "Application mobile",
    projectTwoDescription:
      "Une expérience mobile fluide et agréable.",
    projectThreeTitle: "Identité de marque",
    projectThreeDescription:
      "Une identité visuelle cohérente et reconnaissable.",

    contactLabel: "Contact",
    contactTitle: "Parlons de votre prochain projet",
    contactDescription:
      "Vous avez une idée ou un projet en tête ? Envoyez-moi un message et discutons-en.",
    contactInfoTitle: "Restons en contact",
    contactInfoDescription:
      "Je suis disponible pour discuter de collaborations, de projets et de nouvelles opportunités.",
    formTitle: "Envoyer un message",
    formName: "Votre nom",
    formEmail: "Votre adresse email",
    formSubject: "Sujet",
    formMessage: "Votre message",
    formSubmit: "Envoyer le message",
    formSuccess:
      "Merci pour votre message. Je vous répondrai dès que possible.",

    footerText: "Tous droits réservés.",
    footerPrivacy: "Confidentialité",
    footerTerms: "Conditions"
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact",

    heroBadge: "Available for new projects",
    heroTitle: "Let's create something truly exceptional.",
    heroDescription:
      "I design modern, fast and elegant digital experiences to bring ideas and businesses to life.",
    heroPrimary: "Explore my projects",
    heroSecondary: "Contact me",

    servicesLabel: "My services",
    servicesTitle: "Solutions designed to make a difference",
    servicesDescription:
      "Every project is created with special attention to design, performance and user experience.",

    serviceOneTitle: "Website development",
    serviceOneDescription:
      "Modern, responsive websites adapted to every screen.",
    serviceTwoTitle: "UI/UX design",
    serviceTwoDescription:
      "Clear, elegant and easy-to-use interfaces.",
    serviceThreeTitle: "Digital solutions",
    serviceThreeDescription:
      "Custom digital tools designed around your needs.",

    aboutLabel: "About",
    aboutTitle: "Turning ideas into digital experiences.",
    aboutTextOne:
      "I combine creativity, technology and strategy to create useful and memorable digital products.",
    aboutTextTwo:
      "My goal is to deliver simple, effective and visually powerful solutions.",
    aboutStatOne: "Projects completed",
    aboutStatTwo: "Satisfaction",
    aboutStatThree: "Creativity",
    aboutStatFour: "Availability",

    projectsLabel: "Portfolio",
    projectsTitle: "Selected projects",
    projectsDescription:
      "A selection of concepts and projects designed with passion.",
    projectOneTitle: "Digital platform",
    projectOneDescription:
      "A modern platform with an intuitive interface.",
    projectTwoTitle: "Mobile application",
    projectTwoDescription:
      "A smooth and enjoyable mobile experience.",
    projectThreeTitle: "Brand identity",
    projectThreeDescription:
      "A consistent and recognizable visual identity.",

    contactLabel: "Contact",
    contactTitle: "Let's talk about your next project",
    contactDescription:
      "Have an idea or project in mind? Send me a message and let's discuss it.",
    contactInfoTitle: "Let's stay in touch",
    contactInfoDescription:
      "I am available to discuss collaborations, projects and new opportunities.",
    formTitle: "Send a message",
    formName: "Your name",
    formEmail: "Your email address",
    formSubject: "Subject",
    formMessage: "Your message",
    formSubmit: "Send message",
    formSuccess:
      "Thank you for your message. I will get back to you as soon as possible.",

    footerText: "All rights reserved.",
    footerPrivacy: "Privacy",
    footerTerms: "Terms"
  }
};

const body = document.body;
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageButtons = document.querySelectorAll(".language-button");
const contactForm = document.querySelector(".contact-form form");
const formMessage = document.querySelector(".form-message");

let currentLanguage = localStorage.getItem("portfolio-language") || "fr";

function getTranslation(key) {
  return translations[currentLanguage][key] || translations.fr[key] || key;
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getTranslation(key);

    if (translation) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = getTranslation(key);

    if (translation) {
      element.setAttribute("placeholder", translation);
    }
  });

  document.documentElement.lang = currentLanguage;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setLanguage(language) {
  if (!translations[language]) {
    return;
  }

  currentLanguage = language;
  localStorage.setItem("portfolio-language", language);
  translatePage();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}

function handleHeaderScroll() {
  if (!header) {
    return;
  }

  header.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", handleHeaderScroll, {
  passive: true
});

handleHeaderScroll();

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

const sections = document.querySelectorAll("section[id]");
const navigationAnchors = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.id;
    }
  });

  navigationAnchors.forEach((anchor) => {
    const targetId = anchor.getAttribute("href").replace("#", "");
    anchor.classList.toggle("active", targetId === currentSection);
  });
}

window.addEventListener("scroll", updateActiveNavigation, {
  passive: true
});

updateActiveNavigation();

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = contactForm.querySelector('[name="name"]');
    const emailInput = contactForm.querySelector('[name="email"]');
    const subjectInput = contactForm.querySelector('[name="subject"]');
    const messageInput = contactForm.querySelector('[name="message"]');

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const subject = subjectInput ? subjectInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      if (formMessage) {
        formMessage.textContent =
          currentLanguage === "fr"
            ? "Veuillez remplir tous les champs obligatoires."
            : "Please fill in all required fields.";

        formMessage.classList.add("visible");
        formMessage.style.color = "#fecaca";
        formMessage.style.background = "rgba(239, 68, 68, 0.12)";
      }

      return;
    }

    const mailtoSubject = encodeURIComponent(subject || "Nouveau message");
    const mailtoBody = encodeURIComponent(
      ${currentLanguage === "fr" ? "Nom" : "Name"}: ${name}\n +
        ${currentLanguage === "fr" ? "Email" : "Email"}: ${email}\n\n +
        message
    );

    window.location.href = mailto:?subject=${mailtoSubject}&body=${mailtoBody};

    if (formMessage) {
      formMessage.textContent = getTranslation("formSuccess");
      formMessage.classList.add("visible");
      formMessage.style.color = "#bbf7d0";
      formMessage.style.background = "rgba(34, 197, 94, 0.12)";
    }

    contactForm.reset();
  });
}

translatePage();




