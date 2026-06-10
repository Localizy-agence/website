"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [active, setActive] = useState("Accueil");

  return (
    <header className="header">
      <Link href="/">
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
            onClick={() => setActive(l.label)}
            className={`header-nav-link ${active === l.label ? "active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex-1" />

      <span className="header-phone hidden lg:block cursor-pointer">
        07 81 18 94 24
      </span>

      <button className="header-cta">
        Parlons de votre projet <span className="arrow-anim">→</span>
      </button>
    </header>
  );
}
