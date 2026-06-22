"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Image from "next/image";

declare global {
  interface Window {
    LZ_CONFIG?: {
      emailjs?: {
        service_id: string;
        template_id: string;
        public_key: string;
      };
    };
    emailjs?: {
      init: (options: { publicKey: string }) => void;
      send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<void>;
    };
  }
}

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && <ContactModal onClose={closeModal} />}
    </ContactModalContext.Provider>
  );
}

const services = [
  { id: "site-web", label: "Site web" },
  { id: "seo", label: "SEO & Google Business" },
  { id: "saas", label: "Outil / SaaS" },
  { id: "autre", label: "Autre" },
];

const budgets = [
  { id: "small", label: "< 1 500 €" },
  { id: "medium", label: "1 500 € - 3 000 €" },
  { id: "large", label: "3 000 € - 5 000 €" },
  { id: "xlarge", label: "> 5 000 €" },
  { id: "unknown", label: "Je ne sais pas encore" },
];

const timeframes = [
  { id: "asap", label: "Dès que possible" },
  { id: "1month", label: "Dans le mois" },
  { id: "3months", label: "Dans les 3 mois" },
  { id: "later", label: "Plus tard / Je me renseigne" },
];

const serviceLabels: Record<string, string> = {
  "site-web": "Site web",
  "seo": "SEO & Google Business",
  "saas": "Outil / SaaS",
  "autre": "Autre",
};

const budgetLabels: Record<string, string> = {
  "small": "< 1 500 €",
  "medium": "1 500 € - 3 000 €",
  "large": "3 000 € - 5 000 €",
  "xlarge": "> 5 000 €",
  "unknown": "Je ne sais pas encore",
};

const timeframeLabels: Record<string, string> = {
  "asap": "Dès que possible",
  "1month": "Dans le mois",
  "3months": "Dans les 3 mois",
  "later": "Plus tard / Je me renseigne",
};

function ContactModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    secteur: "",
    services: [] as string[],
    siteExistant: "",
    besoinSaas: "",
    budget: "",
    timeframe: "",
    disponibiliteDate: "",
    disponibiliteCreneau: "",
    message: "",
  });

  useEffect(() => {
    const config = window.LZ_CONFIG?.emailjs;
    if (config?.public_key && window.emailjs) {
      window.emailjs.init({ publicKey: config.public_key });
    }
  }, []);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const formatDate = () => {
    return new Date().toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    const config = window.LZ_CONFIG?.emailjs;

    if (!config?.service_id || !config?.public_key) {
      console.error("EmailJS non configuré");
      setError("Configuration email manquante. Veuillez nous contacter directement.");
      setIsSubmitting(false);
      return;
    }

    const CONTACT_TEMPLATE_ID = "template_mn1zobn";

    const servicesSelected = formData.services.map((s) => serviceLabels[s] || s).join(", ") || "Non renseigné";
    const disponibilite = formData.disponibiliteDate
      ? `${formData.disponibiliteDate} (${formData.disponibiliteCreneau || "Peu importe"})`
      : "Non renseigné";

    const emailParams = {
      prenom: formData.prenom || "Non renseigné",
      nom: formData.nom || "Non renseigné",
      email: formData.email || "Non renseigné",
      telephone: formData.telephone || "Non renseigné",
      entreprise: formData.entreprise || "Non renseigné",
      secteur: formData.secteur || "Non renseigné",
      type_demande: servicesSelected,
      site_existant: formData.siteExistant || "Non renseigné",
      besoin_saas: formData.besoinSaas || "Non renseigné",
      budget: budgetLabels[formData.budget] || "Non renseigné",
      delai: timeframeLabels[formData.timeframe] || "Non renseigné",
      disponibilite: disponibilite,
      besoin: formData.message || "Aucun message",
      date: formatDate(),
      name: "Formulaire Contact Localizy",
      conversation_complete: `--- DEMANDE DE CONTACT ---
Prénom: ${formData.prenom}
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone || "Non renseigné"}
Entreprise: ${formData.entreprise || "Non renseigné"}
Secteur: ${formData.secteur || "Non renseigné"}
Services demandés: ${servicesSelected}
${formData.services.includes("site-web") && formData.siteExistant ? `Site existant: ${formData.siteExistant}` : ""}
${formData.services.includes("saas") && formData.besoinSaas ? `Besoin SaaS: ${formData.besoinSaas}` : ""}
Budget: ${budgetLabels[formData.budget] || "Non renseigné"}
Délai: ${timeframeLabels[formData.timeframe] || "Non renseigné"}
Disponibilité pour appel: ${disponibilite}
Message: ${formData.message || "Aucun"}`.replace(/\n{2,}/g, "\n"),
    };

    try {
      if (window.emailjs) {
        await window.emailjs.send(config.service_id, CONTACT_TEMPLATE_ID, emailParams);
        setIsSuccess(true);
      } else {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: config.service_id,
            template_id: CONTACT_TEMPLATE_ID,
            user_id: config.public_key,
            template_params: emailParams,
          }),
        });
        if (response.ok) {
          setIsSuccess(true);
        } else {
          throw new Error("Erreur lors de l'envoi");
        }
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Une erreur est survenue. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceedStep1 = formData.prenom && formData.email;
  const canProceedStep2 = formData.services.length > 0;
  const canSubmit = canProceedStep1 && canProceedStep2;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(35, 49, 66, 0.6)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "520px",
          maxHeight: "90vh",
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          boxShadow: "0 24px 60px rgba(35, 49, 66, 0.25)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "24px 28px 20px",
            borderBottom: "1px solid #E8E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: "#F5F5FA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src="/stickers/coeur.svg" alt="" width={24} height={27} />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#233142",
                  margin: 0,
                }}
              >
                Parlons de votre projet
              </h2>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6E6E86",
                  margin: 0,
                }}
              >
                On vous répond sous 24h
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#F5F5FA",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: "#6E6E86",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#E8E8F0";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F5F5FA";
            }}
          >
            ✕
          </button>
        </div>

        {/* Progress */}
        {!isSuccess && (
          <div style={{ padding: "16px 28px 0", display: "flex", gap: "8px" }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  flex: 1,
                  height: "4px",
                  borderRadius: "2px",
                  backgroundColor: step >= s ? "#9699CE" : "#E8E8F0",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        )}

        {/* Content */}
        <div
          style={{
            padding: "24px 28px",
            overflowY: "auto",
            flex: 1,
          }}
        >
          {isSuccess ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "#E8F5E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "32px",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#233142",
                  marginBottom: "12px",
                }}
              >
                Demande envoyée !
              </h3>
              <p style={{ fontSize: "15px", color: "#6E6E86", lineHeight: 1.6 }}>
                Merci {formData.prenom} ! On revient vers vous très vite pour
                discuter de votre projet.
              </p>
              <button
                onClick={onClose}
                style={{
                  marginTop: "24px",
                  padding: "14px 32px",
                  borderRadius: "100px",
                  border: "none",
                  backgroundColor: "#233142",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Fermer
              </button>
            </div>
          ) : (
            <>
              {/* Step 1: Coordonnées */}
              {step === 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6E6E86",
                      margin: "0 0 4px",
                    }}
                  >
                    Étape 1/3 — Vos coordonnées
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={labelStyle}>
                        Prénom <span style={{ color: "#DC5B5B" }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.prenom}
                        onChange={(e) => updateField("prenom", e.target.value)}
                        placeholder="Jean"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Nom</label>
                      <input
                        type="text"
                        value={formData.nom}
                        onChange={(e) => updateField("nom", e.target.value)}
                        placeholder="Dupont"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Email <span style={{ color: "#DC5B5B" }}>*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="jean@entreprise.fr"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Téléphone (optionnel)</label>
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => updateField("telephone", e.target.value)}
                      placeholder="06 12 34 56 78"
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={labelStyle}>Entreprise</label>
                      <input
                        type="text"
                        value={formData.entreprise}
                        onChange={(e) => updateField("entreprise", e.target.value)}
                        placeholder="Nom de l'entreprise"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Secteur d'activité</label>
                      <input
                        type="text"
                        value={formData.secteur}
                        onChange={(e) => updateField("secteur", e.target.value)}
                        placeholder="Ex: Plomberie"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Projet */}
              {step === 2 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6E6E86",
                      margin: "0 0 4px",
                    }}
                  >
                    Étape 2/3 — Votre projet
                  </p>

                  <div>
                    <label style={labelStyle}>
                      Type(s) de prestation <span style={{ color: "#DC5B5B" }}>*</span>
                      <span style={{ fontWeight: 400, color: "#9C9CB4", marginLeft: "8px" }}>(plusieurs choix possibles)</span>
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.id)}
                          style={{
                            padding: "14px 16px",
                            borderRadius: "12px",
                            border: formData.services.includes(s.id) ? "2px solid #9699CE" : "1px solid #E8E8F0",
                            backgroundColor: formData.services.includes(s.id) ? "#F5F5FA" : "#FFFFFF",
                            color: "#233142",
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                            fontSize: "14px",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.15s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <span style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "4px",
                            border: formData.services.includes(s.id) ? "none" : "2px solid #C8C8DA",
                            backgroundColor: formData.services.includes(s.id) ? "#9699CE" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#FFFFFF",
                            fontSize: "12px",
                            flexShrink: 0,
                          }}>
                            {formData.services.includes(s.id) && "✓"}
                          </span>
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Champ conditionnel : Site existant */}
                  {formData.services.includes("site-web") && (
                    <div>
                      <label style={labelStyle}>Avez-vous déjà un site web ?</label>
                      <input
                        type="url"
                        value={formData.siteExistant}
                        onChange={(e) => updateField("siteExistant", e.target.value)}
                        placeholder="https://monsite.fr (laisser vide si non)"
                        style={inputStyle}
                      />
                    </div>
                  )}

                  {/* Champ conditionnel : Besoin SaaS */}
                  {formData.services.includes("saas") && (
                    <div>
                      <label style={labelStyle}>Quel type d'outil recherchez-vous ?</label>
                      <input
                        type="text"
                        value={formData.besoinSaas}
                        onChange={(e) => updateField("besoinSaas", e.target.value)}
                        placeholder="Ex: CRM, outil de prospection, automatisation..."
                        style={inputStyle}
                      />
                    </div>
                  )}

                  <div>
                    <label style={labelStyle}>Budget envisagé</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {budgets.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => updateField("budget", b.id)}
                          style={{
                            padding: "12px 16px",
                            borderRadius: "10px",
                            border: formData.budget === b.id ? "2px solid #9699CE" : "1px solid #E8E8F0",
                            backgroundColor: formData.budget === b.id ? "#F5F5FA" : "#FFFFFF",
                            color: "#233142",
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                            fontSize: "14px",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Timing + Message */}
              {step === 3 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#6E6E86",
                      margin: "0 0 4px",
                    }}
                  >
                    Étape 3/3 — Derniers détails
                  </p>

                  <div>
                    <label style={labelStyle}>Quand souhaitez-vous démarrer ?</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      {timeframes.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => updateField("timeframe", t.id)}
                          style={{
                            padding: "12px 14px",
                            borderRadius: "10px",
                            border: formData.timeframe === t.id ? "2px solid #9699CE" : "1px solid #E8E8F0",
                            backgroundColor: formData.timeframe === t.id ? "#F5F5FA" : "#FFFFFF",
                            color: "#233142",
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                            fontSize: "13px",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Quand pouvons-nous vous appeler ?</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <input
                        type="date"
                        value={formData.disponibiliteDate}
                        onChange={(e) => updateField("disponibiliteDate", e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        style={inputStyle}
                      />
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          type="button"
                          onClick={() => updateField("disponibiliteCreneau", "Matin")}
                          style={{
                            flex: 1,
                            padding: "12px 14px",
                            borderRadius: "10px",
                            border: formData.disponibiliteCreneau === "Matin" ? "2px solid #9699CE" : "1px solid #E8E8F0",
                            backgroundColor: formData.disponibiliteCreneau === "Matin" ? "#F5F5FA" : "#FFFFFF",
                            color: "#233142",
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                            fontSize: "13px",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                        >
                          Matin
                        </button>
                        <button
                          type="button"
                          onClick={() => updateField("disponibiliteCreneau", "Après-midi")}
                          style={{
                            flex: 1,
                            padding: "12px 14px",
                            borderRadius: "10px",
                            border: formData.disponibiliteCreneau === "Après-midi" ? "2px solid #9699CE" : "1px solid #E8E8F0",
                            backgroundColor: formData.disponibiliteCreneau === "Après-midi" ? "#F5F5FA" : "#FFFFFF",
                            color: "#233142",
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                            fontSize: "13px",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                        >
                          Après-midi
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Un mot sur votre projet (optionnel)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      placeholder="Décrivez brièvement votre besoin, vos objectifs..."
                      rows={4}
                      style={{
                        ...inputStyle,
                        resize: "none",
                        minHeight: "100px",
                      }}
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div
            style={{
              padding: "20px 28px 24px",
              borderTop: "1px solid #E8E8F0",
              display: "flex",
              gap: "12px",
              justifyContent: "space-between",
            }}
          >
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                style={{
                  padding: "14px 24px",
                  borderRadius: "100px",
                  border: "1px solid #E8E8F0",
                  backgroundColor: "#FFFFFF",
                  color: "#233142",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                ← Retour
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={step === 1 ? !canProceedStep1 : !canProceedStep2}
                style={{
                  padding: "14px 28px",
                  borderRadius: "100px",
                  border: "none",
                  backgroundColor:
                    (step === 1 && canProceedStep1) || (step === 2 && canProceedStep2)
                      ? "#FF6B6B"
                      : "#E8E8F0",
                  color:
                    (step === 1 && canProceedStep1) || (step === 2 && canProceedStep2)
                      ? "#FFFFFF"
                      : "#9C9CB4",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "14px",
                  cursor:
                    (step === 1 && canProceedStep1) || (step === 2 && canProceedStep2)
                      ? "pointer"
                      : "not-allowed",
                  transition: "all 0.15s ease",
                }}
              >
                Continuer →
              </button>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                {error && (
                  <p style={{ fontSize: "13px", color: "#DC5B5B", margin: 0, textAlign: "right" }}>
                    {error}
                  </p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    padding: "14px 28px",
                    borderRadius: "100px",
                    border: "none",
                    backgroundColor: "#FF6B6B",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "14px",
                    cursor: isSubmitting ? "wait" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                    transition: "all 0.15s ease",
                  }}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande →"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-body)",
  fontWeight: 600,
  fontSize: "13px",
  color: "#233142",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "12px",
  border: "1px solid #E8E8F0",
  backgroundColor: "#FFFFFF",
  fontFamily: "var(--font-body)",
  fontSize: "15px",
  color: "#233142",
  outline: "none",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
};
