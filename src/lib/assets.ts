export const logos = {
  main: "/logo/localizy-logo-2.png",
  white: "/logo/localizy-logo-4.png",
  favicon: "/logo/favicon.png",
} as const;

export const mascots = {
  hello: "/mascots/shadow-hello.webp",
  telephone: "/mascots/shadow-telephone.webp",
  brasOuvert: "/mascots/shadow-bras-ouvert.webp",
  pouce: "/mascots/shadow-pouce.webp",
  explication: "/mascots/shadow-explication.webp",
  brasCroise: "/mascots/shadow-bras-croise.webp",
  peace: "/mascots/shadow-peace.webp",
} as const;

export const stickers = {
  cible: "/stickers/cible.svg",
  coeur: "/stickers/coeur.svg",
  etoiles: "/stickers/etoiles.svg",
  fiole: "/stickers/fiole.svg",
  fusee: "/stickers/fusee.svg",
  megaphone: "/stickers/megaphone.svg",
  ordinateur: "/stickers/ordinateur.svg",
  palette: "/stickers/palette.svg",
  sablier: "/stickers/sablier.svg",
  smartphone: "/stickers/smartphone.svg",
} as const;

export type LogoKey = keyof typeof logos;
export type MascotKey = keyof typeof mascots;
export type StickerKey = keyof typeof stickers;
