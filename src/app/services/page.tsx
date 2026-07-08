"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import Underline from "@/components/Underline";

const tabs = [
  { id: "site-web", label: "Site web", sticker: "ordinateur" },
  { id: "seo-gmb", label: "SEO & GMB", sticker: "cible" },
  { id: "saas", label: "SaaS", sticker: "fiole" },
];

const siteWebLivrables = [
  { title: "Design sur-mesure", detail: "Maquette validée avant intégration — zéro surprise" },
  { title: "Intégration WordPress", detail: "Elementor + ACF, autonomie totale pour vous" },
  { title: "SEO on-page inclus", detail: "Structure, balises, vitesse — prêt à ranker dès le lancement" },
  { title: "Responsive garanti", detail: "Mobile-first, testé sur tous les écrans" },
  { title: "Livraison en 3 semaines", detail: "Délai tenu, ou on vous en parle avant" },
];

const seoLivrables = [
  { title: "Audit de visibilité", detail: "État des lieux complet : positions, GMB, concurrents directs" },
  { title: "Optimisation GMB", detail: "Fiche complète, catégories, photos, posts réguliers" },
  { title: "SEO technique & local", detail: "Balises, NAP, netlinking local, schema markup" },
  { title: "Suivi mensuel", detail: "Rapport clair : positions gagnées, trafic, appels générés" },
  { title: "Search Console & Semrush", detail: "Données réelles, pas d'estimations" },
];

const saasProducts = [
  {
    sticker: "palette",
    title: "CRM Localizy",
    description: "Gérez vos prospects, clients et projets sans vous perdre dans dix outils différents. Pensé pour les PME qui veulent de la simplicité, pas de la complexité.",
    replaces: "les tablettes Excel, les carnets, les relances oubliées.",
  },
  {
    sticker: "megaphone",
    title: "Générateur d'articles SEO",
    description: "Produisez du contenu optimisé, structuré et cohérent avec votre stratégie — sans rédiger ligne par ligne. Paramétrez votre cible, votre ton, vos mots-clés. Le reste est automatique.",
    replaces: "les heures de rédaction ou les prestataires trop chers.",
  },
  {
    sticker: "smartphone",
    title: "Chatbot intelligent",
    description: "Un assistant disponible 24h/24 sur votre site, formé sur votre activité, qui répond, qualifie et redirige. Moins de questions répétitives, plus de leads qualifiés.",
    replaces: "les formulaires de contact qui dorment.",
  },
];

const reassuranceItems = [
  {
    sticker: "cible",
    title: "Pas de jargon, des résultats",
    body: "On vous parle chiffres, pas techniques. Chaque action a un objectif mesurable — vous savez toujours où en est votre investissement.",
  },
  {
    sticker: "coeur",
    title: "Un interlocuteur, pas une équipe fantôme",
    body: "Un référent unique du brief à la livraison. Vous avez une question ? Réponse en moins de 3h.",
  },
  {
    sticker: "fusee",
    title: "Construit pour durer",
    body: "Sites maintenables, SEO pérenne, outils évolutifs. On ne vous rend pas dépendant de nous — et c'est voulu.",
  },
];

export default function ServicesPageV2() {
  const [activeTab, setActiveTab] = useState("site-web");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const headerHeight = 80;
    const tabsHeight = 60;
    const offset = headerHeight + tabsHeight + 20;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    tabs.forEach((tab) => {
      const el = sectionRefs.current[tab.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const headerHeight = 80;
    const tabsHeight = 60;
    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - tabsHeight - 20;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1280px] mx-auto" style={{ padding: "16px 28px 80px" }}>
      <Header />

      {/* Hero - texte à gauche, Izy à droite */}
      <section style={{
        marginTop: "32px",
        padding: "56px",
        borderRadius: "24px",
        backgroundColor: "#F5F5FA",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "40px",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Contenu texte à gauche */}
        <div style={{ flex: 1, position: "relative", zIndex: 2 }}>
          <div className="section-eyebrow">· Nos prestations ·</div>
          <h1 className="about-hero-headline" style={{ marginTop: "16px" }}>
            Tout ce qu&apos;il faut pour <Underline>exister</Underline> — et gagner — en ligne<span className="hero-accent">.</span>
          </h1>
          <p className="about-hero-lead" style={{ marginTop: "20px", maxWidth: "500px" }}>
            Sites web qui convertissent. Visibilité locale qui attire. Outils qui automatisent.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <ContactButton>
              Parler de mon projet <span className="arrow-anim">→</span>
            </ContactButton>
            <Link href="/realisations" className="btn btn-ghost">Voir les réalisations</Link>
          </div>
        </div>

        {/* Zone Izy + sticker à droite */}
        <div style={{
          position: "relative",
          width: "380px",
          height: "400px",
          flexShrink: 0
        }}>
          {/* Sticker fusée à gauche d'Izy */}
          <Image
            src="/stickers/fusee.svg"
            alt=""
            width={140}
            height={169}
            style={{
              position: "absolute",
              top: "10%",
              left: "-30%",
              transform: "rotate(15deg)",
              opacity: 0.6
            }}
          />

          {/* Izy mascotte */}
          <Image
            src="/mascots/Izy_Salut.webp"
            alt="Izy"
            width={340}
            height={340}
            priority
            style={{
              position: "absolute",
              bottom: "-50px",
              left: "50%",
              transform: "translateX(-50%) rotate(3deg)",
              zIndex: 1
            }}
          />
        </div>
      </section>

      {/* Sticky tabs - Version avec stickers */}
      <nav className="services-tabs">
        <div className="services-tabs-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`services-tab-v2 ${activeTab === tab.id ? "active" : ""}`}
            >
              <Image
                src={`/stickers/${tab.sticker}.svg`}
                alt=""
                width={20}
                height={20}
                className="services-tab-v2-icon"
                style={{ width: "20px", height: "20px", objectFit: "contain" }}
              />
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Section Site Web - Layout horizontal */}
      <section
        id="site-web"
        ref={(el) => { sectionRefs.current["site-web"] = el; }}
        className="services-section-v2"
      >
        <div className="services-section-v2-grid">
          <div className="services-section-v2-left">
  <div className="section-eyebrow">· Site web ·</div>
            <h2 className="services-section-v2-title">
              Un site qui travaille pour vous.
              <span className="services-section-v2-title-sub">Même quand vous dormez.</span>
            </h2>
            <p className="services-section-v2-desc">
              Pas un site vitrine de plus. Un outil de conversion pensé pour votre cible, construit pour durer, optimisé pour être trouvé.
            </p>

            <div className="services-pour-qui-v2">
              <strong>Pour qui :</strong> PME, artisans, cabinets, commerces — vous avez un business qui tourne, votre site doit être à la hauteur.
            </div>

            <div className="services-stats-row">
              <div className="services-stat-chip">
                <span className="services-stat-chip-value">20+</span>
                <span className="services-stat-chip-label">sites livrés</span>
              </div>
              <div className="services-stat-chip">
                <span className="services-stat-chip-value">100%</span>
                <span className="services-stat-chip-label">dans les délais</span>
              </div>
              <div className="services-stat-chip">
                <span className="services-stat-chip-value">3h</span>
                <span className="services-stat-chip-label">première réponse</span>
              </div>
            </div>

            <ContactButton>
              Démarrer mon site <span className="arrow-anim">→</span>
            </ContactButton>
          </div>

          <div className="services-section-v2-right">
            <div className="services-livrables-v2">
              <h3 className="services-livrables-v2-title">Ce qu&apos;on livre</h3>
              {siteWebLivrables.map((item, i) => (
                <div key={i} className="services-livrable-v2">
                  <div className="services-livrable-v2-check">✓</div>
                  <div>
                    <div className="services-livrable-v2-title">{item.title}</div>
                    <div className="services-livrable-v2-detail">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section SEO & GMB - Layout inversé */}
      <section
        id="seo-gmb"
        ref={(el) => { sectionRefs.current["seo-gmb"] = el; }}
        className="services-section-v2 services-section-v2-alt"
      >
        <div className="services-section-v2-grid services-section-v2-grid-reverse">
          <div className="services-section-v2-right">
            <div className="services-livrables-v2">
              <h3 className="services-livrables-v2-title">Ce qu&apos;on livre</h3>
              {seoLivrables.map((item, i) => (
                <div key={i} className="services-livrable-v2">
                  <div className="services-livrable-v2-check">✓</div>
                  <div>
                    <div className="services-livrable-v2-title">{item.title}</div>
                    <div className="services-livrable-v2-detail">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

<div className="services-section-v2-left">
            <div className="section-eyebrow">· SEO & GMB ·</div>
            <h2 className="services-section-v2-title">
              Première position sur Google.
              <span className="services-section-v2-title-sub">Dans votre zone, pour vos clients.</span>
            </h2>
            <p className="services-section-v2-desc">
              Le SEO local, c&apos;est la différence entre un site que personne ne trouve et un agenda qui se remplit.
            </p>

            <div className="services-pour-qui-v2">
              <strong>Pour qui :</strong> Tout business avec une zone géographique : restaurant, cabinet médical, agence, commerce de proximité.
            </div>

            <div className="services-resultat-v2">
              <Image src="/stickers/fusee.svg" alt="" width={32} height={39} />
              <div>
                <div className="services-resultat-v2-label">Résultat type</div>
                <div className="services-resultat-v2-value">+40% de clics organiques en 3 mois</div>
              </div>
            </div>

            <ContactButton>
              Auditer ma visibilité <span className="arrow-anim">→</span>
            </ContactButton>
          </div>
        </div>
      </section>

      {/* Section SaaS - Cards en grille */}
      <section
        id="saas"
        ref={(el) => { sectionRefs.current["saas"] = el; }}
        className="services-section-v2"
      >
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <div className="section-eyebrow">· SaaS & Outils ·</div>
          <h2 className="section-headline">
            Les outils qu&apos;on a construits<br />
            parce qu&apos;ils <Underline>n&apos;existaient pas</Underline>.
          </h2>
          <p className="section-lead">
            Trois produits développés en interne, utilisés par nos clients, disponibles maintenant.
          </p>
        </div>

        <div className="services-saas-grid">
          {saasProducts.map((product, i) => (
            <div key={i} className="services-saas-card-v2 hover-lift">
              <div className="services-saas-card-v2-header">
                <Image
                  src={`/stickers/${product.sticker}.svg`}
                  alt=""
                  width={48}
                  height={48}
                  style={{ width: "48px", height: "48px", objectFit: "contain" }}
                />
                <h3 className="services-saas-card-v2-title">{product.title}</h3>
              </div>
              <p className="services-saas-card-v2-desc">{product.description}</p>
              <div className="services-saas-card-v2-replaces">
                Ce que ça remplace : <em>{product.replaces}</em>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <ContactButton>
            Découvrir les outils <span className="arrow-anim">→</span>
          </ContactButton>
        </div>
      </section>

      {/* Section Réassurance */}
      <section className="services-reassurance-v2">
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <div className="section-eyebrow">· Pourquoi Localizy ·</div>
          <h2 className="section-headline">
            On livre. C&apos;est aussi <Underline>simple</Underline> que ça.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reassuranceItems.map((item, i) => (
            <div key={i} className="pourquoi-card hover-lift">
              <div className="pourquoi-icon">
                <Image
                  src={`/stickers/${item.sticker}.svg`}
                  alt=""
                  width={52}
                  height={52}
                  style={{ width: "52px", height: "52px", objectFit: "contain" }}
                />
              </div>
              <h3 className="pourquoi-title">{item.title}</h3>
              <p className="pourquoi-body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="py-14">
          <div className="final-cta-eyebrow">· On se parle ? ·</div>
          <h2 className="final-cta-headline">
            Prêt à faire <Underline>avancer</Underline> votre business
            <span className="hero-accent">?</span>
          </h2>
          <p className="final-cta-lead">
            Un projet, une question, ou juste envie de savoir ce qu&apos;on peut faire pour vous. On répond vite, on va droit au but.
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
          height={524}
          className="final-cta-mascot hidden lg:block self-end justify-self-end"
        />
      </section>

      <Footer />
    </div>
  );
}
