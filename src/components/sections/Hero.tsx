"use client";

import Image from "next/image";
import Button from "../Button";
import ContactButton from "../ContactButton";

export default function Hero() {
  return (
    <section className="hero">
      <div className="relative z-10">
        <span className="hero-badge">
          <span className="hero-badge-icon">★</span>
          Agence locale · Oise
        </span>

        <h1 className="hero-headline">
          Des sites web qui font{" "}
          <span className="hero-highlight">avancer</span>
          <br />
          votre business<span className="hero-accent">.</span>
        </h1>

        <p className="hero-lead">
          Localizy conçoit des sites web performants et optimise votre présence
          en ligne pour attirer plus de clients autour de vous. Un
          accompagnement clair, humain et sans bullshit.
        </p>

        <div className="flex flex-wrap gap-3 items-center">
          <ContactButton>
            Parlons de votre projet <span className="arrow-anim">→</span>
          </ContactButton>
          <Button variant="ghost">
            Découvrir nos services <span className="arrow-anim">→</span>
          </Button>
        </div>

      </div>

      <div className="hero-mascot">
        <Image
          src="/mascots/shadow-hello.webp"
          alt="Shadow, la mascotte Localizy"
          width={330}
          height={480}
          className="hero-mascot-img"
          priority
        />

        <div
          className="hero-float-card"
          style={{ top: 32, right: 0, width: 220, transform: "rotate(3deg)" }}
        >
          <span className="hero-float-card-icon">
            <Image src="/stickers/cible.svg" alt="" width={28} height={30} />
          </span>
          <div>
            <div className="hero-float-card-title">+ de visibilité locale</div>
            <div className="hero-float-card-sub">SEO local + GMB</div>
          </div>
        </div>

        <div
          className="hero-float-card"
          style={{ bottom: 24, left: 0, width: 260, transform: "rotate(-3deg)" }}
        >
          <Image src="/stickers/ordinateur.svg" alt="" width={36} height={27} />
          <div>
            <div className="hero-float-card-title">Site livré en 3 sem.</div>
            <div className="hero-float-card-sub">Design + dev + mise en ligne</div>
          </div>
        </div>

        <Image
          src="/stickers/etoiles.svg"
          alt=""
          width={64}
          height={29}
          className="absolute top-0 left-5"
          style={{ transform: "rotate(-15deg)", opacity: 0.95 }}
        />
      </div>
    </section>
  );
}
