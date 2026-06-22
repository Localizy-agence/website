"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type Project = {
  id: number;
  name: string;
  type: string;
  result?: string;
  sticker: string;
  categories: string[];
  url?: string;
  screenshot?: string;
};

// Si l'iframe n'a pas signalé son chargement dans ce délai, on retombe
// sur la screenshot (filet de sécurité pour les sites lents / bloqués).
const IFRAME_TIMEOUT_MS = 5000;

// On rend l'iframe à une taille « desktop » (1280×800 = ratio 16/10,
// identique à la card) puis on la met à l'échelle pour la faire tenir
// dans le cadre. Sans ça, l'iframe étroite déclencherait la version mobile.
const DESKTOP_WIDTH = 1280;
const DESKTOP_HEIGHT = 800;

export default function RealisationCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const [scale, setScale] = useState(0.5);
  const mediaRef = useRef<HTMLDivElement>(null);

  // Détection mobile (< 768px) : pas d'iframe, pas d'interaction hover.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Facteur d'échelle = largeur réelle de la card / largeur desktop virtuelle.
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setScale(el.clientWidth / DESKTOP_WIDTH);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const canIframe = Boolean(project.url) && !isMobile && !iframeFailed;
  // On monte l'iframe au premier hover puis on la garde montée une fois
  // chargée (évite de recharger le site à chaque survol).
  const mountIframe = canIframe && (isHovered || iframeReady);

  // Filet de sécurité : si l'onLoad/onError ne se déclenche jamais.
  useEffect(() => {
    if (!mountIframe || iframeReady || iframeFailed) return;
    const t = setTimeout(() => setIframeFailed(true), IFRAME_TIMEOUT_MS);
    return () => clearTimeout(t);
  }, [mountIframe, iframeReady, iframeFailed]);

  const handleLoad = () => setIframeReady(true);
  const handleError = () => setIframeFailed(true);

  const showIframe = mountIframe && iframeReady && isHovered;

  return (
    <div
      className="realisation-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="realisation-card-media" ref={mediaRef}>
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={`Aperçu du site ${project.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            priority={priority}
            className="realisation-card-screenshot"
          />
        ) : (
          <span className="realisation-card-placeholder">Capture du site</span>
        )}

        {mountIframe && (
          <iframe
            src={project.url}
            title={`Aperçu interactif du site ${project.name}`}
            loading="lazy"
            onLoad={handleLoad}
            onError={handleError}
            className={`realisation-card-iframe ${showIframe ? "is-active" : ""}`}
            style={{
              width: `${DESKTOP_WIDTH}px`,
              height: `${DESKTOP_HEIGHT}px`,
              transform: `scale(${scale})`,
            }}
            // Limite ce que le site embarqué peut faire dans notre page.
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        )}

        {/* Badge catégorie */}
        <div className="realisation-card-badge">
          <Image
            src={`/stickers/${project.sticker}.svg`}
            alt=""
            width={16}
            height={16}
            style={{ width: "16px", height: "16px", objectFit: "contain" }}
          />
          <span className="realisation-card-badge-label">{project.type}</span>
        </div>
      </div>

      <div className="realisation-card-body">
        <h3 className="realisation-card-title">{project.name}</h3>
        {project.result ? (
          <div className="realisation-card-result">{project.result}</div>
        ) : null}
      </div>
    </div>
  );
}
