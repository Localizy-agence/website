"use client";

import Image from "next/image";
import Underline from "../Underline";
import ContactButton from "../ContactButton";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="py-14">
        <div className="final-cta-eyebrow">· On se parle ? ·</div>
        <h2 className="final-cta-headline">
          Prêt à faire <Underline>avancer</Underline> votre business
          <span className="hero-accent">?</span>
        </h2>
        <p className="final-cta-lead">
          Une question, un projet ou simplement l&apos;envie d&apos;échanger ?
          On prend toujours le temps de discuter avant de se lancer.
        </p>

        <div className="flex flex-wrap gap-3 mb-7">
          <ContactButton>
            Prendre rendez-vous <span className="arrow-anim">→</span>
          </ContactButton>
          <ContactButton variant="secondary">Nous écrire</ContactButton>
        </div>

        <div className="final-cta-contact">
          <div>
            <div className="final-cta-contact-label">Email</div>
            <div className="final-cta-contact-value">contact@localizy.fr</div>
          </div>
          <div>
            <div className="final-cta-contact-label">Téléphone</div>
            <div className="final-cta-contact-value">07 81 18 94 24</div>
          </div>
          <div>
            <div className="final-cta-contact-label">Bureau</div>
            <div className="final-cta-contact-value">Oise (60)</div>
          </div>
        </div>
      </div>

      <Image
        src="/mascots/shadow-telephone.webp"
        alt="Shadow au téléphone"
        width={360}
        height={400}
        className="final-cta-mascot hidden lg:block self-end justify-self-end"
      />
    </section>
  );
}
