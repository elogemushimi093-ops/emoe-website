document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#modal");
  const closeButton = document.querySelector("#closeModal");
  const backdrop = document.querySelector(".modal-backdrop");

  function openModal(event) {
    if (event) event.preventDefault();

    if (!modal) {
      console.error("La fenêtre d'inscription #modal est introuvable.");
      return;
    }

    modal.classList.add("open");
    modal.classList.add("active");
    modal.classList.add("show");

    document.body.classList.add("modal-open");
  }

  function closeModalWindow() {
    if (!modal) return;

    modal.classList.remove("open");
    modal.classList.remove("active");
    modal.classList.remove("show");

    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll('[data-open="admission"]').forEach((button) => {
    button.addEventListener("click", openModal);
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeModalWindow);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeModalWindow);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModalWindow();
    }
  });

  /* Carrousel manuel uniquement pour le moment */
  const track = document.querySelector("#track");
  const previousButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  if (track) {
    let index = 0;

    function moveCarousel() {
      const card = track.querySelector(".program-card");

      if (!card) return;

      const gap = 18;
      const width = card.getBoundingClientRect().width + gap;

      track.style.transform =
        translateX(-${index * width}px);
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        const cards = track.querySelectorAll(".program-card");
        const maxIndex = Math.max(0, cards.length - 1);

        index = Math.min(index + 1, maxIndex);
        moveCarousel();
      });
    }

    if (previousButton) {
      previousButton.addEventListener("click", () => {
        index = Math.max(index - 1, 0);
        moveCarousel();
      });
    }

    window.addEventListener("resize", moveCarousel);
  }

  /* Formulaire */
  const form = document.querySelector("#admissionForm");
  const status = document.querySelector("#status");
  const submitButton = document.querySelector("#submitAdmission");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      const data = {
        nom: formData.get("nom") || "",
        prenoms: formData.get("prenoms") || "",
        postNom: formData.get("postNom") || "",
        dateNaissance: formData.get("dateNaissance") || "",
        telephone: formData.get("telephone") || "",
        email: formData.get("email") || "",
        pays: formData.get("pays") || "",
        ville: formData.get("ville") || "",
        eglise: formData.get("eglise") || "",
        fonction: formData.get("fonction") || ""
      };

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Envoi en cours...";
      }

      if (status) {
        status.textContent = "";
      }

      try {
        const response = await fetch("/api/admission", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi");
        }

        if (status) {
          status.textContent =
            "Votre demande a bien été envoyée.";
        }

        form.reset();

      } catch (error) {
        console.error(error);

        if (status) {
          status.textContent =
            "Impossible d'envoyer la demande pour le moment.";
        }

      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = "Envoyer la demande";
        }
      }
    });
  }
});
