"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import Underline from "@/components/Underline";

const approachSteps = [
  {
    title: "Comprendre votre activité",
    description:
      "Chaque projet commence par une discussion pour comprendre votre métier, vos objectifs et vos clients.",
  },
  {
    title: "Construire des solutions utiles",
    description:
      "Nous créons des sites et des stratégies de visibilité pensés pour être simples, efficaces et durables.",
  },
  {
    title: "Avancer avec vous dans la durée",
    description:
      "Notre objectif n'est pas seulement de livrer un site, mais de vous accompagner dans le développement de votre présence en ligne.",
  },
];

const values = [
  {
    sticker: "cible",
    title: "Clarté avant tout",
    description: "Pas de jargon, des résultats.",
  },
  {
    sticker: "sablier",
    title: "Respect des délais",
    description: "On livre à temps, toujours.",
  },
  {
    sticker: "coeur",
    title: "Relation directe",
    description: "À vos côtés de A à Z.",
  },
];

export default function AProposPage() {
  return (
    <div className="max-w-[1280px] mx-auto" style={{ padding: "16px 28px 80px" }}>
      <Header />

      {/* Hero - texte à gauche, Izy à droite avec stickers */}
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
          <div className="section-eyebrow">· À propos ·</div>
          <h1 className="about-hero-headline" style={{ marginTop: "16px" }}>
            Une agence proche des <Underline>entreprises locales</Underline>
            <span className="hero-accent">.</span>
          </h1>
          <p className="about-hero-lead" style={{ marginTop: "20px", maxWidth: "500px" }}>
            Localizy vous accompagne dans le développement de votre présence en ligne.
            Sites web, SEO local, outils sur-mesure — le digital au service de votre croissance.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <ContactButton>
              Parlons de votre projet <span className="arrow-anim">→</span>
            </ContactButton>
            <Link href="/realisations" className="btn btn-ghost">Voir nos réalisations</Link>
          </div>
        </div>

        {/* Zone Izy + stickers à droite */}
        <div style={{
          position: "relative",
          width: "380px",
          height: "400px",
          flexShrink: 0
        }}>
          {/* Sticker coeur au-dessus d'Izy */}
          <Image
            src="/stickers/coeur.svg"
            alt=""
            width={120}
            height={134}
            style={{
              position: "absolute",
              top: "2%",
              left: "50%",
              transform: "translateX(-50%) rotate(8deg)",
              opacity: 0.6
            }}
          />

          {/* Izy mascotte */}
          <Image
            src="/mascots/Izy_Heureux.webp"
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

      {/* Pourquoi Localizy + Stats combinés */}
      <section style={{
        marginTop: "80px",
        padding: "48px",
        borderRadius: "24px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        alignItems: "stretch"
      }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div className="section-eyebrow">· Pourquoi Localizy ·</div>
          <h2 className="section-headline">
            Rendre le digital <Underline>accessible</Underline>
          </h2>
          <p className="about-why-text">
            Trop d&apos;entreprises locales se retrouvent avec des sites compliqués à gérer,
            peu visibles ou qui n&apos;apportent aucun résultat.
          </p>
          <p className="about-why-text">
            <strong>Localizy est né d&apos;une idée simple :</strong> rendre le digital clair,
            accessible et réellement utile pour les entreprises. Nous privilégions des solutions
            simples, bien construites et pensées pour durer.
          </p>

          {/* Placeholders photos */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "32px"
          }}>
            <div style={{
              position: "relative",
              aspectRatio: "4/3",
              borderRadius: "12px",
              overflow: "hidden"
            }}>
              <Image
                src="/images/equipe.webp"
                alt="L'équipe Localizy"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{
              position: "relative",
              aspectRatio: "4/3",
              borderRadius: "12px",
              overflow: "hidden"
            }}>
              <Image
                src="/images/bureau.webp"
                alt="Le bureau Localizy"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#233142",
          borderRadius: "16px",
          padding: "40px 44px",
          justifyContent: "space-between",
          minWidth: "220px",
          alignSelf: "stretch"
        }}>
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "42px", color: "#FFFFFF" }}>
              +20
            </div>
            <div style={{ marginTop: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>entreprises accompagnées</div>
          </div>
          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "42px", color: "#FFFFFF" }}>
              5<span style={{ fontSize: "24px", color: "#BABBDE" }}>/5</span>
            </div>
            <div style={{ marginTop: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>note Google</div>
          </div>
          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.15)" }} />
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "42px", color: "#FFFFFF" }}>
              24<span style={{ fontSize: "24px", color: "#BABBDE" }}>h</span>
            </div>
            <div style={{ marginTop: "8px", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>temps de réponse</div>
          </div>
        </div>
      </section>

      {/* L'équipe + Valeurs fusionnés */}
      <section style={{
        marginTop: "80px",
        borderRadius: "24px",
        backgroundColor: "#9699CE",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          bottom: "-140px",
          left: "30px",
          width: "420px"
        }}>
          <Image
            src="/mascots/shadow-artiste.webp"
            alt="Izy"
            width={420}
            height={611}
            style={{
              display: "block"
            }}
          />
        </div>
        <div style={{ flex: 1, padding: "40px 48px 40px 42%", display: "flex", flexDirection: "column" }}>
          <div style={{
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#233142",
            marginBottom: "8px"
          }}>· Nos valeurs ·</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "36px",
            lineHeight: 1.1,
            color: "#FFFFFF",
            marginBottom: "24px"
          }}>
            L&apos;équipe derrière Localizy
          </h2>
          <p style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            marginBottom: "16px"
          }}>
            Localizy est une petite équipe passionnée par le web, le design et la visibilité en ligne.
            Nous travaillons en collaboration avec nos clients pour comprendre leur métier et construire
            des solutions adaptées à leur réalité.
          </p>

          {/* Valeurs en ligne - style léger */}
          <div style={{
            display: "flex",
            gap: "24px",
            marginTop: "24px",
            flexWrap: "wrap",
            flex: 1
          }}>
            {values.map((value, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                flex: "1 1 0"
              }}>
                <div style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: "10px",
                  padding: "10px",
                  flexShrink: 0
                }}>
                  <Image
                    src={`/stickers/${value.sticker}.svg`}
                    alt=""
                    width={28}
                    height={28}
                    style={{ width: "28px", height: "28px", objectFit: "contain" }}
                  />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#FFFFFF",
                    marginBottom: "4px"
                  }}>{value.title}</h3>
                  <p style={{
                    fontSize: "13px",
                    lineHeight: 1.4,
                    color: "rgba(255,255,255,0.75)"
                }}>{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "30px" }}>
            <ContactButton>
              Demander un RDV <span className="arrow-anim">→</span>
            </ContactButton>
          </div>
        </div>
      </section>

      {/* Notre approche - Layout horizontal */}
      <section style={{
        marginTop: "100px",
        padding: "56px 48px",
        borderRadius: "24px",
        backgroundColor: "#F5F5FA",
        display: "flex",
        flexDirection: "row",
        gap: "56px",
        alignItems: "stretch"
      }}>
        <div style={{ flexShrink: 0 }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "56px",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#233142"
          }}>
            Notre<br /><Underline>approche</Underline>
          </h2>
        </div>
        <div style={{
          width: "1px",
          backgroundColor: "#C8C8DA",
          flexShrink: 0
        }} />
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          flex: 1
        }}>
          {approachSteps.map((step, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px"
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#233142",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "20px",
                flexShrink: 0
              }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "18px",
                  color: "#233142",
                  marginBottom: "6px"
                }}>{step.title}</h3>
                <p style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#6E6E86"
                }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="py-14">
          <div className="final-cta-eyebrow">· On travaille ensemble ? ·</div>
          <h2 className="final-cta-headline">
            Prêt à développer votre <Underline>présence en ligne</Underline>
            <span className="hero-accent">?</span>
          </h2>
          <p className="final-cta-lead">
            Un projet, une question, ou juste envie de savoir ce qu&apos;on peut faire pour vous.
            On répond vite, on va droit au but.
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
