"use client";

import Image from "next/image";
import Underline from "../Underline";
import ContactButton from "../ContactButton";

const items = [
  {
    sticker: "coeur",
    title: "Une collaboration claire, humaine et transparente",
    body: "Pas de jargon, pas de promesses floues. Chez Localizy, on prend le temps de comprendre votre activité, vos clients et vos objectifs. On avance ensemble, étape par étape, dans une relation basée sur la transparence et la confiance.",
  },
  {
    sticker: "fusee",
    title: "Des solutions qui servent votre business",
    body: "Chaque site, chaque action a un seul but : faire grandir votre activité. Nos créations allient design, performance et visibilité locale pour des résultats concrets et durables.",
  },
  {
    sticker: "megaphone",
    title: "Une équipe locale, experte et engagée",
    body: "SEO, sites web, contenus, Google My Business… notre équipe réunit toutes les compétences pour booster votre présence en ligne. Déjà plus de 20 entreprises accompagnées avec succès — et la vôtre sera la prochaine.",
  },
];

export default function Pourquoi() {
  return (
    <section className="pourquoi">
      <div className="text-center max-w-[720px] mx-auto mb-14">
        <div className="section-eyebrow">· Pourquoi Localizy ·</div>
        <h2 className="section-headline">
          Pourquoi choisir <Underline>Localizy</Underline> ?
        </h2>
        <p className="section-lead">
          Parce qu&apos;on construit chaque projet comme si c&apos;était le nôtre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <div key={i} className="pourquoi-card hover-lift">
            <div className="pourquoi-icon">
              <Image
                src={`/stickers/${it.sticker}.svg`}
                alt=""
                width={52}
                height={52}
                style={{ width: "52px", height: "52px", objectFit: "contain" }}
              />
            </div>
            <h3 className="pourquoi-title">{it.title}</h3>
            <p className="pourquoi-body">{it.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <ContactButton>
          Parlons de votre projet <span className="arrow-anim">→</span>
        </ContactButton>
      </div>
    </section>
  );
}
