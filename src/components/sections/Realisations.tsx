import Image from "next/image";
import Underline from "../Underline";
import Button from "../Button";

const PROJECTS = [
  {
    client: "Opticien Nouveau Regard",
    tag: "Site vitrine + prise de RDV",
    bg: "#FFE9E0",
    image: "/images/hp_realisation_1.webp",
  },
  {
    client: "Espace Modulaire France",
    tag: "Site vitrine + Optimisation GMB & SEO",
    bg: "#EFEEFB",
    image: "/images/hp_realisation_2.webp",
  },
  {
    client: "Auberge du Maroc",
    tag: "Restaurant - Commandes et Réservations en ligne",
    bg: "#E8EDF5",
    image: "/images/hp_realisation_3.webp",
  },
];

function SiteMockup({
  color,
  bg,
  label,
}: {
  color: string;
  bg: string;
  label: string;
}) {
  return (
    <div
      className="flex flex-col gap-2.5 relative overflow-hidden"
      style={{ aspectRatio: "4/3", background: bg, padding: "18px 18px 0" }}
    >
      <div className="flex items-center gap-1.5">
        <span className="mockup-chrome-dot" />
        <span className="mockup-chrome-dot" />
        <span className="mockup-chrome-dot" />
        <span className="mockup-url" style={{ color }}>
          {label.toLowerCase().replace(/[^a-z]/g, "")}.fr
        </span>
      </div>

      <div className="mockup-content">
        <div className="flex items-center gap-2">
          <span
            className="w-[18px] h-[18px] rounded-full"
            style={{ background: color }}
          />
          <span className="text-[11px] font-semibold lz-display" style={{ color: "var(--lz-navy)" }}>
            {label}
          </span>
          <span className="flex-1" />
          <span className="mockup-skeleton w-6 h-1.5" />
          <span className="mockup-skeleton w-6 h-1.5" />
        </div>
        <div className="h-[22px] w-[85%] rounded mt-1" style={{ background: color }} />
        <div className="mockup-skeleton h-2 w-[70%]" />
        <div className="mockup-skeleton h-2 w-[60%]" />
        <div className="flex gap-1.5 mt-1.5">
          <span className="w-[50px] h-4 rounded-lg" style={{ background: color }} />
          <span className="mockup-skeleton w-[50px] h-4 rounded-lg" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="mockup-skeleton" style={{ aspectRatio: "1" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Realisations() {
  return (
    <section className="realisations">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end mb-10">
        <div>
          <div className="section-eyebrow">· Réalisations ·</div>
          <h2 className="realisations-headline">
            Des projets qui font <Underline>avancer</Underline> nos clients
            <span className="hero-accent">.</span>
          </h2>
          <p className="realisations-lead">
            Voici quelques exemples de projets menés par Localizy. Des sites web
            conçus pour être beaux, clairs et surtout efficaces.
          </p>
        </div>
        <Button variant="ghost" className="whitespace-nowrap">
          Découvrir nos réalisations <span className="arrow-anim">→</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p, i) => (
          <div key={i} className="project-card hover-lift">
            {p.image ? (
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={p.image}
                  alt={p.client}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <SiteMockup color="#9699CE" bg={p.bg} label={p.client} />
            )}
            <div className="project-card-content">
              <div className="project-card-tag" style={{ color: "#9699CE" }}>
                {p.tag}
              </div>
              <div className="project-card-title">
                {p.client}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
