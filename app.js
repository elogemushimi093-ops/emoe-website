const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close");
const admissionForm = document.querySelector("#admission");
const statusMessage = document.querySelector("#status");
const track = document.querySelector("#track");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#prev");
const languageButton = document.querySelector("#lang");

/* Ouverture de la fenêtre de candidature */
document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
    }
  });
});

/* Fermeture de la fenêtre */
if (closeButton && modal) {
  closeButton.addEventListener("click", () => {
    modal.close();
  });
}

/* Fermeture en cliquant à l'extérieur de la fenêtre */
if (modal) {
  modal.addEventListener("click", (event) => {
    const dialogRectangle = modal.getBoundingClientRect();

    const clickedOutside =
      event.clientX < dialogRectangle.left ||
      event.clientX > dialogRectangle.right ||
      event.clientY < dialogRectangle.top ||
      event.clientY > dialogRectangle.bottom;

    if (clickedOutside) {
      modal.close();
    }
  });
}

/* Défilement des cartes de programmes */
if (track && nextButton) {
  nextButton.addEventListener("click", () => {
    track.scrollBy({
      left: 360,
      behavior: "smooth"
    });
  });
}

if (track && previousButton) {
  previousButton.addEventListener("click", () => {
    track.scrollBy({
      left: -360,
      behavior: "smooth"
    });
  });
}

/* Version anglaise */
if (languageButton) {
  languageButton.addEventListener("click", () => {
    alert(
      "The English version of the E.M.O.E. website is being prepared."
    );
  });
}

/* Envoi du formulaire de candidature */
if (admissionForm) {
  admissionForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (statusMessage) {
      statusMessage.textContent = "Envoi de votre candidature en cours…";
      statusMessage.setAttribute("aria-live", "polite");
    }

    const submitButton = admissionForm.querySelector(
      'button[type="submit"], button[submit]'
    );

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Envoi en cours…";
    }

    const formData = new FormData(admissionForm);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      let result = {};

      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok) {
        throw new Error(
          result.message || "L’envoi de la candidature a échoué."
        );
      }

      if (statusMessage) {
        statusMessage.textContent =
          result.message ||
          "Votre candidature a été envoyée avec succès. Merci pour votre confiance.";
      }

      admissionForm.reset();
    } catch (error) {
      if (statusMessage) {
        statusMessage.textContent =
          error.message ||
          "Une erreur est survenue. Veuillez réessayer plus tard.";
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Envoyer ma candidature";
      }
    }
  });
}
