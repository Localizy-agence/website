import Image from "next/image";
import Link from "next/link";
import Underline from "../Underline";

interface ServiceCardProps {
  sticker: string;
  pill: string;
  title: string;
  body: string;
}

function ServiceCard({ sticker, pill, title, body }: ServiceCardProps) {
  return (
    <div className="service-card hover-lift">
      <div className="flex items-start justify-between gap-4 mb-5">
        <span
          className="service-pill"
          style={{ background: "rgba(150,153,206,0.18)", color: "var(--lz-navy)" }}
        >{pill}</span>
        <div className="w-[80px] h-[80px] flex items-center justify-center -mt-2">
          <Image
            src={`/stickers/${sticker}.svg`}
            alt=""
            width={80}
            height={80}
            className="object-contain"
            style={{ width: "80px", height: "80px" }}
          />
        </div>
      </div>

      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-body">{body}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section className="services">
      <div className="text-center max-w-[720px] mx-auto mb-14">
        <div className="section-eyebrow">· Nos services ·</div>
        <h2 className="section-headline">
          On s&apos;occupe de votre <Underline>présence en ligne</Underline>
          <span className="hero-accent">.</span>
        </h2>
        <p className="section-lead">
          Des services simples, pensés pour faire grandir votre activité sans
          jargon ni prise de tête. Vous méritez d&apos;être vu autant que vous
          travaillez dur. On s&apos;en charge.
        </p>
        <Link href="/a-propos" className="btn btn-ghost mt-7">
          Découvrir notre méthode <span className="arrow-anim">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          sticker="ordinateur"
          pill="Sites web"
          title="Des sites performants et à votre image"
          body="On conçoit des sites modernes, rapides et pensés pour convertir, quelle que soit votre activité. Pour que votre site devienne un vrai outil de business : clair, visible, et facile à gérer."
        />
        <ServiceCard
          sticker="cible"
          pill="SEO & GMB"
          title="Faites ressortir votre marque sur le web"
          body="On améliore votre référencement naturel (SEO) et votre fiche Google My Business pour que vos clients vous trouvent facilement. Gagnez en visibilité locale et en crédibilité — sans passer des heures à comprendre l'algorithme."
        />
        <ServiceCard
          sticker="fusee"
          pill="SaaS"
          title="Création d'applications sur-mesure"
          body="Vous avez une idée, un process à automatiser ou un besoin spécifique ? On développe des applications web, mobiles et des outils boostés à l'IA, taillés pour votre activité. Simples à utiliser, évolutifs et pensés pour vous faire gagner du temps."
        />
      </div>
    </section>
  );
}
