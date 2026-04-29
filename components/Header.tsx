"use client";

import Link from "next/link";
import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { RollingButton } from "@/components/RollingButton";

export function Header() {
  const closeMenu = () => {
    const checkbox = document.getElementById("mobile-menu") as HTMLInputElement | null;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="top-strip-inner">
          <a href="https://maps.google.com/?q=Žiacka 3704/19 Piešťany Banka 92101">
            <MapPin aria-hidden="true" />
            <span>{site.address}</span>
          </a>
          <a href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" />
            <span>{site.email}</span>
          </a>
          <a href={site.phoneHref}>
            <Phone aria-hidden="true" />
            <span>{site.phone}</span>
          </a>
          <span>
            <Clock aria-hidden="true" />
            Pon-Pia: 8:00-17:00
          </span>
          <a href={site.facebook} target="_blank" rel="noreferrer">
            <span className="social-dot">f</span>
            <span>Mapex Belica s.r.o.</span>
          </a>
        </div>
      </div>

      <div className="nav-frame">
        <Link className="brand-text" href="/" onClick={closeMenu}>
          MaPeX Belica s.r.o
        </Link>
        <nav className="desktop-nav" aria-label="Hlavná navigácia">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="desktop-order">
          <RollingButton href="#kontakt" variant="outline">
            Objednať
          </RollingButton>
        </div>

        <input className="mobile-menu-check" type="checkbox" id="mobile-menu" />
        <label className="mobile-menu-button" htmlFor="mobile-menu" aria-label="Otvoriť mobilné menu">
          <Menu className="open-icon" aria-hidden="true" />
          <X className="close-icon" aria-hidden="true" />
        </label>
        <nav className="mobile-nav" aria-label="Mobilná navigácia">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link href="#kontakt" onClick={closeMenu}>
            Objednať
          </Link>
        </nav>
        <label className="mobile-nav-blur" htmlFor="mobile-menu" aria-label="Zavrieť mobilné menu" />
      </div>
    </header>
  );
}
