/* =========================================================
   E.M.O.E — Application JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     LANGUAGE — FR / EN
     ======================================================= */

  const langButton = document.querySelector("#lang");

  let currentLanguage =
    localStorage.getItem("emoe-language") || "fr";

  const translations = {
    fr: {
      "nav-about": "L'école",
      "nav-programs": "Programmes",
      "nav-admission": "Admission",
      "nav-contact": "Contact",

      "hero-eyebrow": "École de Ministère Ombre de l'Éternel",
      "hero-title": "Former une génération de ministres",
      "hero-text":
        "Une formation biblique, théologique et pratique destinée à préparer des hommes et des femmes à servir Dieu avec connaissance, caractère et responsabilité.",
      "hero-admission": "Demander une admission",
      "hero-programs": "Découvrir les programmes",
      "hero-scroll": "Découvrir",

      "about-label": "Notre vision",
      "about-title": "Une école pour équiper ceux qui sont appelés à servir.",
      "about-text":
        "L'École de Ministère Ombre de l'Éternel, E.M.O.E., propose une formation centrée sur la Parole de Dieu, la théologie pratique et le développement d'un ministère responsable.",

      "feature-1-title": "Fondement biblique",
      "feature-1-text":
        "Une formation profondément enracinée dans les Saintes Écritures et la foi chrétienne évangélique.",

      "feature-2-title": "Théologie pratique",
      "feature-2-text":
        "Des enseignements destinés à relier la connaissance théologique aux réalités concrètes du ministère.",

      "feature-3-title": "Leadership",
      "feature-3-text":
        "Développer le caractère, la vision et les compétences nécessaires pour servir efficacement.",

      "identity-label": "Notre identité",
      "identity-title": "Une formation chrétienne évangélique.",
      "identity-text":
        "Tous les étudiants doivent reconnaître et respecter la Déclaration de foi ainsi que le Pacte communautaire de l'école.",

      "identity-card-title": "Engagement communautaire",
      "identity-card-text":
        "L'identité évangélique de l'E.M.O.E. constitue une condition essentielle de l'intégration au sein de la communauté scolaire.",

      "program-label": "Parcours académiques",
      "program-title": "Des programmes construits pour accompagner chaque étape du ministère.",
      "program-prev": "Programme précédent",
      "program-next": "Programme suivant",

      "licence-level": "Premier cycle",
      "licence-title": "Licence",
      "licence-text":
        "Une formation fondamentale en théologie et en ministère pratique.",

      "master-level": "Deuxième cycle",
      "master-title": "Master",
      "master-text":
        "Accessible aux titulaires d'une Licence en théologie pratique.",

      "doctorate-level": "Troisième cycle",
      "doctorate-title": "Doctorat",
      "doctorate-text":
        "Accessible aux titulaires d'un Master en théologie pratique.",

      "discover": "Découvrir le programme",

      "subjects-title": "Matières de la Licence",
      "subjects-intro":
        "La Licence comprend notamment les enseignements suivants :",

      "subject-1": "Introduction à la théologie",
      "subject-2": "Homilétique",
      "subject-3": "Gestion financière d'une église locale",
      "subject-4": "Herméneutique",
      "subject-5": "Eschatologie",
      "subject-6": "Angélologie",
      "subject-7": "Démonologie",
      "subject-8": "Leadership biblique",

      "requirements-title": "Conditions d'admission",

      "requirement-1-title": "Licence",
      "requirement-1-text":
        "Signer la Déclaration de foi et le Pacte communautaire, puis accepter l'identité évangélique et les valeurs de la communauté.",

      "requirement-2-title": "Master",
      "requirement-2-text":
        "Être titulaire d'une Licence en théologie pratique.",

      "requirement-3-title": "Doctorat",
      "requirement-3-text":
        "Être titulaire d'un Master en théologie pratique.",

      "documents-title": "Documents demandés",

      "document-1": "Lettre d'intention",
      "document-2": "Pièce d'identité",
      "document-3": "Photo d'identité",

      "registration-title": "Frais d'inscription",
      "registration-fee": "10 $",
      "registration-label": "Frais d'inscription",

      "tuition-title": "Scolarité",
      "tuition-fee": "0 $",
      "tuition-label": "Frais de scolarité",

      "calendar-title": "Calendrier",
      "calendar-text":
        "Les inscriptions ont lieu en décembre et les cours commencent en mars.",

      "countries-label": "Présence internationale",
      "countries-title":
        "Une école ouverte aux étudiants de plusieurs nations.",
      "countries-text":
        "L'E.M.O.E. accueille les candidatures provenant notamment de ces pays :",

      "contact-label": "Nous contacter",
      "contact-title": "Prêt à commencer votre parcours ?",
      "contact-text":
        "Pour toute question concernant l'admission, les programmes ou les conditions d'inscription, contactez directement l'école.",

      "contact-phone": "Téléphone",
      "contact-whatsapp": "WhatsApp admissions",
      "contact-email": "E-mail",
      "contact-location": "Localisation",

      "modal-title": "Demande d'admission",
      "modal-intro":
        "Remplissez le formulaire ci-dessous. L'équipe de l'E.M.O.E. pourra ensuite vous contacter.",

      "field-nom": "Nom",
      "field-prenoms": "Prénoms",
      "field-postnom": "Post-nom",
      "field-birth": "Date de naissance",
      "field-phone": "Téléphone",
      "field-email": "E-mail",
      "field-country": "Pays",
      "field-city": "Ville",
      "field-church": "Église",
      "field-position": "Fonction / Ministère",

      "placeholder-nom": "Votre nom",
      "placeholder-prenoms": "Vos prénoms",
      "placeholder-postnom": "Votre post-nom",
      "placeholder-phone": "Votre numéro",
      "placeholder-email": "Votre adresse e-mail",
      "placeholder-city": "Votre ville",
      "placeholder-church": "Nom de votre église",
      "placeholder-position": "Votre fonction ou ministère",

      "submit": "Envoyer la demande",
      "sending": "Envoi en cours...",
      "success":
        "Votre demande a bien été envoyée. Nous vous contacterons prochainement.",
      "error":
        "Une erreur est survenue. Veuillez réessayer ou contacter directement l'école.",

      "footer-text":
        "École de Ministère Ombre de l'Éternel — E.M.O.E."
    },

    en: {
      "nav-about": "The School",
      "nav-programs": "Programs",
      "nav-admission": "Admission",
      "nav-contact": "Contact",

      "hero-eyebrow": "École de Ministère Ombre de l'Éternel",
      "hero-title": "Equipping a generation of ministers",
      "hero-text":
        "Biblical, theological and practical training designed to prepare men and women to serve God with knowledge, character and responsibility.",
      "hero-admission": "Apply for admission",
      "hero-programs": "Explore programs",
      "hero-scroll": "Discover",

      "about-label": "Our vision",
      "about-title": "A school designed to equip those called to serve.",
      "about-text":
        "École de Ministère Ombre de l'Éternel, E.M.O.E., provides training centered on God's Word, practical theology and the development of responsible ministry.",

      "feature-1-title": "Biblical foundation",
      "feature-1-text":
        "Training deeply rooted in the Holy Scriptures and evangelical Christian faith.",

      "feature-2-title": "Practical theology",
      "feature-2-text":
        "Teaching designed to connect theological knowledge with the realities of ministry.",

      "feature-3-title": "Leadership",
      "feature-3-text":
        "Developing the character, vision and skills needed to serve effectively.",

      "identity-label": "Our identity",
      "identity-title": "An evangelical Christian education.",
      "identity-text":
        "All students must acknowledge and respect the Statement of Faith and the Community Covenant of the school.",

      "identity-card-title": "Community commitment",
      "identity-card-text":
        "The evangelical identity of E.M.O.E. is an essential condition for becoming part of the school community.",

      "program-label": "Academic pathways",
      "program-title": "Programs designed to accompany every stage of ministry.",
      "program-prev": "Previous program",
      "program-next": "Next program",

      "licence-level": "Undergraduate",
      "licence-title": "Licence",
      "licence-text":
        "Foundational training in theology and practical ministry.",

      "master-level": "Graduate",
      "master-title": "Master",
      "master-text":
        "Available to students holding a Licence in practical theology.",

      "doctorate-level": "Doctoral",
      "doctorate-title": "Doctorate",
      "doctorate-text":
        "Available to students holding a Master in practical theology.",

      "discover": "Explore the program",

      "subjects-title": "Licence subjects",
      "subjects-intro":
        "The Licence includes the following subjects:",

      "subject-1": "Introduction to theology",
      "subject-2": "Homiletics",
      "subject-3": "Financial management of a local church",
      "subject-4": "Hermeneutics",
      "subject-5": "Eschatology",
      "subject-6": "Angelology",
      "subject-7": "Demonology",
      "subject-8": "Biblical leadership",

      "requirements-title": "Admission requirements",

      "requirement-1-title": "Licence",
      "requirement-1-text":
        "Sign the Statement of Faith and Community Covenant, and accept the evangelical identity and community values.",

      "requirement-2-title": "Master",
      "requirement-2-text":
        "Hold a Licence in practical theology.",

      "requirement-3-title": "Doctorate",
      "requirement-3-text":
        "Hold a Master in practical theology.",

      "documents-title": "Required documents",

      "document-1": "Letter of intent",
      "document-2": "Identity document",
      "document-3": "Passport photo",

      "registration-title": "Registration fee",
      "registration-fee": "$10",
      "registration-label": "Registration fee",

      "tuition-title": "Tuition",
      "tuition-fee": "$0",
      "tuition-label": "Tuition fee",

      "calendar-title": "Calendar",
      "calendar-text":
        "Applications take place in December and classes begin in March.",

      "countries-label": "International presence",
      "countries-title":
        "A school open to students from many nations.",
      "countries-text":
        "E.M.O.E. welcomes applications from, among others, the following countries:",

      "contact-label": "Contact us",
      "contact-title": "Ready to begin your journey?",
      "contact-text":
        "For questions about admission, programs or enrollment requirements, contact the school directly.",

      "contact-phone": "Phone",
      "contact-whatsapp": "Admissions WhatsApp",
      "contact-email": "Email",
      "contact-location": "Location",

      "modal-title": "Admission application",
      "modal-intro":
        "Complete the form below. The E.M.O.E. team will then be able to contact you.",

      "field-nom": "Last name",
      "field-prenoms": "First names",
      "field-postnom": "Middle name",
      "field-birth": "Date of birth",
      "field-phone": "Phone",
      "field-email": "Email",
      "field-country": "Country",
      "field-city": "City",
      "field-church": "Church",
      "field-position": "Position / Ministry",

      "placeholder-nom": "Your last name",
      "placeholder-prenoms": "Your first names",
      "placeholder-postnom": "Your middle name",
      "placeholder-phone": "Your phone number",
      "placeholder-email": "Your email address",
      "placeholder-city": "Your city",
      "placeholder-church": "Your church name",
      "placeholder-position": "Your position or ministry",

      "submit": "Send application",
      "sending": "Sending...",
      "success":
        "Your application has been sent successfully. We will contact you soon.",
      "error":
        "An error occurred. Please try again or contact the school directly.",

      "footer-text":
        "École de Ministère Ombre de l'Éternel — E.M.O.E."
    }
  };

  function applyLanguage(language) {
    const dictionary = translations[language];

    if (!dictionary) return;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
      const key = element.dataset.fr;

      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document
      .querySelectorAll("[data-placeholder-fr][data-placeholder-en]")
      .forEach((element) => {
        element.placeholder =
          language === "fr"
            ? element.dataset.placeholderFr
            : element.dataset.placeholderEn;
      });

    if (langButton) {
      langButton.textContent = language === "fr" ? "EN" : "FR";
      langButton.setAttribute(
        "aria-label",
        language === "fr"
          ? "Switch to English"
          : "Passer en français"
      );
    }

    localStorage.setItem("emoe-language", language);

    currentLanguage = language;
  }

  if (langButton) {
    langButton.addEventListener("click", () => {
      const nextLanguage =
        currentLanguage === "fr" ? "en" : "fr";

      applyLanguage(nextLanguage);
    });
  }

  applyLanguage(currentLanguage);

  /* =======================================================
     ADMISSION MODAL
     ======================================================= */

  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector("#closeModal");

  function openAdmissionModal() {
    if (!modal) return;

    modal.classList.add("open");
    document.body.classList.add("modal-open");

    setTimeout(() => {
      const firstInput = modal.querySelector("input");

      if (firstInput) {
        firstInput.focus();
      }
    }, 100);
  }

  function closeAdmissionModal() {
    if (!modal) return;

    modal.classList.remove("open");
    modal.classList.remove("active");
    modal.classList.remove("show");

    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll('[data-open="admission"]').forEach((button) => {
    button.addEventListener("click", openAdmissionModal);
  });

  if (closeModal) {
    closeModal.addEventListener("click", closeAdmissionModal);
  }

  if (modal) {
    const backdrop = modal.querySelector(".modal-backdrop");

    if (backdrop) {
      backdrop.addEventListener("click", closeAdmissionModal);
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAdmissionModal();
    }
  });

  /* =======================================================
     PROGRAM CAROUSEL
     ======================================================= */

  const track = document.querySelector("#track");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  if (track) {
    const cards = Array.from(
      track.querySelectorAll(".program-card")
    );

    let currentIndex = 0;
    let direction = 1;
    let carouselTimer = null;

    function getVisibleCards() {
      if (window.innerWidth <= 640) {
        return 1;
      }

      if (window.innerWidth <= 1000) {
        return 2;
      }

      return 3;
    }

    function getMaxIndex() {
      return Math.max(
        0,
        cards.length - getVisibleCards()
      );
    }

    function updateCarousel(animate = true) {
      if (!cards.length) return;

      const firstCard = cards[0];

      const cardWidth = firstCard.getBoundingClientRect().width;

      const gap =
        parseFloat(
          window.getComputedStyle(track).gap
        ) || 0;

      const offset =
        currentIndex * (cardWidth + gap);

      if (!animate) {
        track.style.transition = "none";
      } else {
        track.style.transition =
          "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)";
      }

      track.style.transform =
        translate3d(-${offset}px, 0, 0);

      if (!animate) {
        requestAnimationFrame(() => {
          track.style.transition =
            "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)";
        });
      }
    }

    function goNext() {
      const maxIndex = getMaxIndex();

      if (maxIndex <= 0) return;

      if (currentIndex >= maxIndex) {
        direction = -1;
      }

      if (currentIndex <= 0) {
        direction = 1;
      }

      currentIndex += direction;

      updateCarousel();
    }

    function goPrevious() {
      const maxIndex = getMaxIndex();

      if (maxIndex <= 0) return;

      currentIndex--;

      if (currentIndex < 0) {
        currentIndex = maxIndex;
      }

      direction = -1;

      updateCarousel();
    }

    function startCarousel() {
      stopCarousel();

      carouselTimer = setInterval(() => {
        goNext();
      }, 4200);
    }

    function stopCarousel() {
      if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
      }
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        goNext();
        startCarousel();
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        goPrevious();
        startCarousel();
      });
    }

    const carousel = document.querySelector(
      ".program-carousel"
    );

    if (carousel) {
      carousel.addEventListener(
        "mouseenter",
        stopCarousel
      );

      carousel.addEventListener(
        "mouseleave",
        startCarousel
      );

      carousel.addEventListener(
        "touchstart",
        stopCarousel,
        { passive: true }
      );

      carousel.addEventListener(
        "touchend",
        startCarousel,
        { passive: true }
      );
    }

    window.addEventListener("resize", () => {
      const maxIndex = getMaxIndex();

      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }

      updateCarousel(false);
    });

    updateCarousel(false);
    startCarousel();
  }

  /* =======================================================
     ADMISSION FORM
     ======================================================= */

  const admissionForm =
    document.querySelector("#admissionForm");

  const submitButton =
    document.querySelector("#submitAdmission");

  const statusElement =
    document.querySelector("#status");

  if (admissionForm) {
    admissionForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (
        submitButton &&
        submitButton.disabled
      ) {
        return;
      }

      const formData =
        new FormData(admissionForm);

      const data = {
        nom: formData.get("nom")?.trim() || "",
        prenoms: formData.get("prenoms")?.trim() || "",
        postNom: formData.get("postNom")?.trim() || "",
        dateNaissance:
          formData.get("dateNaissance") || "",
        telephone:
          formData.get("telephone")?.trim() || "",
        email:
          formData.get("email")?.trim() || "",
        pays:
          formData.get("pays")?.trim() || "",
        ville:
          formData.get("ville")?.trim() || "",
        eglise:
          formData.get("eglise")?.trim() || "",
        fonction:
          formData.get("fonction")?.trim() || ""
      };

      if (!data.nom || !data.prenoms || !data.email) {
        if (statusElement) {
          statusElement.textContent =
            currentLanguage === "fr"
              ? "Veuillez remplir les champs obligatoires."
              : "Please complete the required fields.";

          statusElement.setAttribute(
            "role",
            "alert"
          );
        }

        return;
      }

      if (submitButton) {
        submitButton.disabled = true;

        submitButton.textContent =
          translations[currentLanguage].sending;
      }

      if (statusElement) {
        statusElement.textContent = "";
      }

      try {
        const response = await fetch(
          "/api/admission",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }
        );

        let result = {};

        try {
          result = await response.json();
        } catch {
          result = {};
        }

        if (!response.ok) {
          throw new Error(
            result.message || "Request failed"
          );
        }

        if (statusElement) {
          statusElement.textContent =
            translations[currentLanguage].success;

          statusElement.setAttribute(
            "role",
            "status"
          );
        }

        admissionForm.reset();

        setTimeout(() => {
          closeAdmissionModal();
        }, 2500);

      } catch (error) {
        console.error(
          "Admission error:",
          error
        );

        if (statusElement) {
          statusElement.textContent =
            translations[currentLanguage].error;

          statusElement.setAttribute(
            "role",
            "alert"
          );
        }

      } finally {
        if (submitButton) {
          submitButton.disabled = false;

          submitButton.textContent =
            translations[currentLanguage].submit;
        }
      }
    });
  }

  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  /* =======================================================
     YEAR
     ======================================================= */

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent =
      new Date().getFullYear();
  });
});
