import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Underline from "@/components/Underline";
import { ReactNode } from "react";

export interface LegalSection {
  title: string;
  /** Paragraphes de la section. */
  body?: ReactNode[];
  /** Liste à puces affichée après les paragraphes. */
  list?: ReactNode[];
}

interface LegalPageProps {
  eyebrow: string;
  /** Titre affiché : le dernier mot est souligné. */
  title: string;
  underlined: string;
  intro?: string;
  sections: LegalSection[];
}

export default function LegalPage({
  eyebrow,
  title,
  underlined,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className="page-shell">
      <Header />

      <section style={{ marginTop: "48px", maxWidth: "760px" }}>
        <div className="section-eyebrow">· {eyebrow} ·</div>
        <h1 className="about-hero-headline" style={{ marginTop: "16px" }}>
          {title} <Underline>{underlined}</Underline>
          <span className="hero-accent">.</span>
        </h1>

        {intro && (
          <p className="about-hero-lead" style={{ marginTop: "24px", maxWidth: "680px" }}>
            {intro}
          </p>
        )}

        <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="section-headline" style={{ fontSize: "22px", marginBottom: "8px" }}>
                {s.title}
              </h2>

              {s.body?.map((p, i) => (
                <p
                  key={i}
                  className="about-hero-lead"
                  style={{ maxWidth: "680px", marginTop: i === 0 ? 0 : "12px" }}
                >
                  {p}
                </p>
              ))}

              {s.list && (
                <ul
                  className="about-hero-lead"
                  style={{
                    maxWidth: "680px",
                    marginTop: "12px",
                    paddingLeft: "20px",
                    listStyle: "disc",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {s.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
