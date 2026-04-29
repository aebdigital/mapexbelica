(function () {
  if ("noModule" in HTMLScriptElement.prototype) return;
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-contact-form]").forEach(function (form) {
      form.addEventListener("submit", function () {
        var message = form.querySelector(".form-message");
        if (message) {
          message.textContent = "Formulár vyžaduje moderný prehliadač alebo zapnutý JavaScript.";
        }
      });
    });
  });
})();
