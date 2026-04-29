"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Vyplňte prosím meno, email a správu.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const data = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Správu sa nepodarilo odoslať.");
      }

      form.reset();
      setStatus("success");
      setMessage("Ďakujeme, správa bola odoslaná.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Správu sa nepodarilo odoslať. Skúste to prosím neskôr."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} data-contact-form>
      <div className="form-field">
        <input name="name" aria-label="Meno" type="text" placeholder="Meno" required />
      </div>
      <div className="form-field">
        <input
          name="email"
          aria-label="Email"
          type="email"
          placeholder="Email"
          maxLength={320}
          required
        />
      </div>
      <div className="form-field">
        <textarea name="message" aria-label="Správa" placeholder="Správa" required />
      </div>
      <button className="rolling-submit" type="submit" disabled={status === "loading"}>
        <span className="rolling-track">
          <span>{status === "loading" ? "Odosielam..." : "Odoslať"}</span>
          <span aria-hidden="true">{status === "loading" ? "Odosielam..." : "Odoslať"}</span>
        </span>
      </button>
      <p className={`form-message ${status}`} aria-live="polite">
        {message}
      </p>
    </form>
  );
}
