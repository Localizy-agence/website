import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Services",
    items: [
      { label: "Sites web", href: "/services#sites-web" },
      { label: "SEO local", href: "/services#seo" },
      { label: "Google My Business", href: "/services#gmb" },
      { label: "Contenus", href: "/services#contenus" },
      { label: "Maintenance", href: "/services#maintenance" },
    ],
  },
  {
    title: "Agence",
    items: [
      { label: "À propos", href: "/a-propos" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Méthode", href: "/methode" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Légal",
    items: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/confidentialite" },
      { label: "CGV", href: "/cgv" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
          <div className="flex gap-2 mt-1">
            {["in", "ig", "f"].map((s) => (
              <span key={s} className="footer-social">
                {s}
              </span>
            ))}
          </div>
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
      </div>

      <div className="footer-bottom">
        <span>© 2026 Localizy — Fait dans l&apos;Oise avec ♥</span>
        <span>localizy.fr</span>
      </div>
    </footer>
  );
}
