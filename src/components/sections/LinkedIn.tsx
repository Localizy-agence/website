"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Underline from "../Underline";

const LINKEDIN_POSTS = [
  {
    tag: "SEO local",
    title: "5 erreurs qui plombent ta visibilité locale",
    sticker: "cible",
  },
  {
    tag: "Sites web",
    title: "Pourquoi faire un audit de votre site web ?",
    sticker: "ordinateur",
  },
  {
    tag: "Conseil",
    title: "3 idées simples pour récolter des avis Google",
    sticker: "etoiles",
  },
  {
    tag: "Sites web",
    title: "Un site responsive pour développer votre business",
    sticker: "fusee",
  },
];

const bgColors = ["#EFEEFB", "#FFE9E0", "#E8EDF5", "#FFF3D9"];

export default function LinkedIn() {
  // Carousel (mobile) : même mécanique scroll-snap que les autres sliders.
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(LINKEDIN_POSTS.length - 1, i));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const sl = track.scrollLeft;
    let nearest = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - sl);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setIndex(nearest);
  };

  return (
    <section className="linkedin">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end mb-10">
        <div>
          <div className="section-eyebrow">· Actus & conseils ·</div>
          <h2 className="linkedin-headline">
            Suivez-nous sur <Underline>LinkedIn</Underline>
            <span className="hero-accent">.</span>
          </h2>
          <p className="linkedin-lead">
            Suivez Localizy sur LinkedIn pour découvrir nos conseils, astuces et
            retours du terrain. Devenez un vrai pro du digital local.
          </p>
        </div>

        <a
          href="https://www.linkedin.com/company/agencelocalizy"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-cta"
          style={{ color: "white" }}
        >
          <span className="linkedin-cta-icon">in</span>
          Nous suivre <span className="arrow-anim" style={{ color: "white" }}>→</span>
        </a>
      </div>

      <div
        className="linkedin-track"
        ref={trackRef}
        onScroll={handleScroll}
      >
        {LINKEDIN_POSTS.map((p, i) => (
          <div key={i} className="linkedin-card hover-lift">
            <div
              className="linkedin-card-visual"
              style={{ background: bgColors[i], aspectRatio: "4/3" }}
            >
                            <h3 className="linkedin-card-title">{p.title}</h3>
              <Image
                src={`/stickers/${p.sticker}.svg`}
                alt=""
                width={80}
                height={80}
                className="absolute -bottom-2.5 -right-2.5 opacity-35"
                style={{ transform: "rotate(-12deg)", width: "80px", height: "80px", objectFit: "contain" }}
              />
            </div>
            <div className="linkedin-card-footer">
              <span>{p.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation (mobile uniquement) */}
      <div className="linkedin-dots">
        {LINKEDIN_POSTS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            className={`linkedin-dot ${i === index ? "active" : ""}`}
            aria-label={`Voir la publication ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
