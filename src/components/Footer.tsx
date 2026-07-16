"use client";

import Image from "next/image";
import Link from "next/link";
import { useContactModal } from "./ContactModal";

const footerLinks = [
  {
    title: "Services",
    items: [
      { label: "Sites web", href: "/services#site-web" },
      { label: "SEO & Google My Business", href: "/services#seo-gmb" },
      { label: "SaaS & Outils", href: "/services#saas" },
    ],
  },
  {
    title: "Agence",
    items: [
      { label: "À propos", href: "/a-propos" },
      { label: "Réalisations", href: "/realisations" },
    ],
  },
  {
    title: "Légal",
    items: [{ label: "Mentions légales", href: "/mentions-legales" }],
  },
];

export default function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="footer">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex flex-col gap-4">
          <Image
            src="/logo/localizy-logo-4.png"
            alt="Localizy"
            width={140}
            height={29}
            className="object-contain"
          />
          <p className="footer-tagline">
            L&apos;agence locale qui fait briller les entreprises de l&apos;Oise et
            alentours sur le web.
          </p>
        </div>

        {footerLinks.map((col) => (
          <div key={col.title}>
            <div className="footer-heading">{col.title}</div>
            {col.items.map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </div>
        ))}

        <div>
          <div className="footer-heading">Contact</div>
          <button type="button" onClick={openModal} className="footer-link footer-link-btn">
            Nous écrire
          </button>
          <a href="tel:+33781189424" className="footer-link">
            07 81 18 94 24
          </a>
          <a href="tel:+33659946612" className="footer-link">
            06 59 94 66 12
          </a>
          <a href="mailto:contact@localizy.fr" className="footer-link">
            contact@localizy.fr
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Localizy — Fait dans l&apos;Oise avec ♥</span>
        <span>localizy.fr</span>
      </div>
    </footer>
  );
}
