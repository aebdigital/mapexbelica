export function initForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    if (form.dataset.formsInitialized === "true") return;
    form.dataset.formsInitialized = "true";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const messageEl = form.querySelector(".form-message");
      const submit = form.querySelector("button[type='submit']");
      const formData = new FormData(form);
      const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        message: String(formData.get("message") || "").trim()
      };

      if (submit) submit.disabled = true;
      if (messageEl) messageEl.textContent = "";

      try {
        const response = await fetch("/.netlify/functions/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || "Správu sa nepodarilo odoslať.");
        form.reset();
        if (messageEl) messageEl.textContent = data.message || "Ďakujeme, správa bola odoslaná.";
      } catch (error) {
        if (messageEl) {
          messageEl.textContent =
            error instanceof Error ? error.message : "Správu sa nepodarilo odoslať.";
        }
      } finally {
        if (submit) submit.disabled = false;
      }
    });
  });
}
