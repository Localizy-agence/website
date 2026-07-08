"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContactModal } from "./ContactModal";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useContactModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="header">
      <Link href="/" onClick={() => setMenuOpen(false)}>
        <Image
          src="/logo/localizy-logo-2.png"
          alt="Localizy"
          width={120}
          height={25}
          className="object-contain"
        />
      </Link>

      <nav className="hidden md:flex gap-6 ml-2">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={`header-nav-link ${isActive(l.href) ? "active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex-1" />

      <a href="tel:+33781189424" className="header-phone hidden lg:block cursor-pointer">
        07 81 18 94 24
      </a>

      {/* CTA desktop / tablette (masqué en mobile via CSS) */}
      <button className="header-cta header-cta-desktop" onClick={openModal}>
        Parlons de votre projet <span className="arrow-anim">→</span>
      </button>

      {/* Bouton hamburger — mobile uniquement (affiché en mobile via CSS) */}
      <button
        className="header-burger"
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className={`header-burger-icon ${menuOpen ? "is-open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {/* Menu déroulant mobile */}
      {menuOpen && (
        <nav className="header-mobile-menu md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`header-mobile-link ${isActive(l.href) ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <button
            className="header-cta header-mobile-cta"
            onClick={() => {
              setMenuOpen(false);
              openModal();
            }}
          >
            Parlons de votre projet <span className="arrow-anim">→</span>
          </button>
        </nav>
      )}
    </header>
  );
}
