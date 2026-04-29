"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { openingHours, site } from "@/data/site";

export function Footer() {
  const openCookies = () => {
    window.dispatchEvent(new Event("open-cookie-settings"));
  };

  return (
    <footer id="kontakt" className="site-footer">
      <div className="footer-grid">
        <div className="footer-contact" data-animate>
          <h2>Kontakt</h2>
          <p>
            <strong>MaPeX Belica s.r.o</strong>
          </p>
          <p>
            Žiacka 3704/19
            <br />
            Piešťany – Banka
            <br />
            92101
          </p>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p>
            <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>
          </p>
          <p>
            <button className="footer-link-button" type="button" onClick={openCookies}>
              Cookies
            </button>
          </p>
          <p>
            <strong>Otváracie hodiny:</strong>
          </p>
          <ul className="opening-hours">
            {openingHours.map(([day, hours]) => (
              <li key={day}>
                <span>{day}</span>
                <span>{hours}</span>
              </li>
            ))}
          </ul>
          <a className="facebook-link" href={site.facebook} target="_blank" rel="noreferrer">
            <span>f</span>
            <strong>Mapex Belica s.r.o.</strong>
          </a>
        </div>

        <div className="footer-form" data-animate>
          <h2>Máte nejaké otázky?</h2>
          <ContactForm />
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2026 MaPeX Belica s.r.o. Všetky práva vyhradené.</p>
        <p>
          <a href="https://aebdigital.sk/" target="_blank" rel="noreferrer">
            Tvorba webu - AEB Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
