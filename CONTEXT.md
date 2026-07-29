# Contexte du projet Localizy Website

## État actuel

Site vitrine Localizy déployé automatiquement sur o2switch via GitHub Actions.

**URL de test** : https://new.localizy.fr  
**URL production** : https://localizy.fr (actuellement WordPress, à remplacer quand prêt)  
**Repo GitHub** : https://github.com/Localizy-agence/website

### Stack technique
- Next.js 16 avec App Router
- Tailwind CSS 4
- Export statique (`output: "export"`)
- Déploiement automatique via GitHub Actions + FTP

### Ce qui est en place
- Homepage complète avec toutes les sections + **responsive mobile** (menu hamburger, paddings/tailles adaptés)
- Page Services complète avec navigation sticky tabs
- Page À propos avec hero Izy, stats, valeurs, approche (+ photos équipe & bureau)
- Page Réalisations avec grille filtrable + cartes interactives (scroll molette sur captures, visuel fixe, carte de marque sans visuel)
- Pages Mentions légales et Politique de confidentialité (contenu réel, infos société)
- Formulaire de contact en modal (3 étapes, EmailJS)
- Design system complet dans `globals.css` (+ bloc `@media (max-width:767px)` mobile en fin de fichier)
- Navigation & boutons tous reliés (pages ou modal contact)
- Carousel avis Google (9 avis réels)
- Chatbot Localizy intégré sur toutes les pages
- Landing page **IzyRESA** (`/izy-reservation/`), non reliée au site (accès par le lien uniquement)
- Déploiement automatique sur push vers main

### Fichiers clés
```
src/
├── app/
│   ├── globals.css       # Design system complet
│   ├── layout.tsx        # Intégration chatbot
│   ├── page.tsx          # Homepage
│   ├── services/
│   │   └── page.tsx      # Page Services (tabs sticky, 3 sections)
│   ├── a-propos/
│   │   └── page.tsx      # Page À propos (hero Izy, stats, valeurs)
│   ├── realisations/
│   │   └── page.tsx      # Page Réalisations (grille filtrable)
│   ├── mentions-legales/
│   │   └── page.tsx      # Mentions légales (éditeur, hébergeur, PI, cookies)
│   └── confidentialite/
│       └── page.tsx      # Politique de confidentialité (RGPD)
├── components/
│   ├── Header.tsx           # Nav + menu hamburger mobile
│   ├── Footer.tsx           # Client (lien Contact = modal)
│   ├── RealisationCard.tsx  # 3 modes: scroll molette / visuel fixe / sans visuel
│   ├── ContactButton.tsx    # Bouton qui ouvre le modal contact
│   ├── ContactModal.tsx     # Modal contact 3 étapes + EmailJS
│   ├── ClientProviders.tsx  # Provider pour le modal
│   ├── LegalPage.tsx        # Gabarit partagé des pages légales
│   ├── Underline.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Reviews.tsx      # Carousel 9 avis Google
│       ├── Services.tsx     # 3 cartes (Sites, SEO, SaaS)
│       ├── Realisations.tsx # 3 projets clients
│       ├── Pourquoi.tsx
│       ├── Stats.tsx
│       ├── LinkedIn.tsx
│       └── FinalCTA.tsx
├── lib/
│   └── assets.ts
public/
├── izy-reservation/
│   └── index.html        # Landing IzyRESA (HTML autonome, hors Next)
├── chatbot/              # Widget chatbot Localizy
│   ├── chatbot.js
│   ├── chatbot.css
│   ├── config.js         # ⚠️ Non commité (clés API)
│   └── assets/
.github/
└── workflows/
    └── deploy.yml        # GitHub Actions auto-deploy
```

## Déploiement

### Workflow automatique
À chaque push sur `main` :
1. GitHub Actions build le projet
2. Upload via FTP vers o2switch
3. Site mis à jour sur new.localizy.fr

### Secrets GitHub configurés
- `FTP_HOST` : ftp.localizy.fr
- `FTP_USER` : website@new.localizy.fr
- `FTP_PASSWORD` : (secret)

### Commandes
```bash
# Développement local
npm run dev

# Build pour production
npm run build

# Push = déploiement automatique
git add . && git commit -m "message" && git push
```

## Fichiers de documentation
- `README.md` — entrée du dépôt : démarrer, déployer, ce que contient quoi
- `CONTEXT.md` — ce fichier : décisions, pièges connus, conventions
- `GUIDE-DEPLOIEMENT.md` — comment le pipeline GitHub Actions a été monté (à refaire ailleurs)

> `deploy.sh` et `README-DEPLOY.md` ont été supprimés le 29/07/2026. Ils décrivaient un
> déploiement SSH depuis o2switch (clone du repo sur le serveur, build sur place, copie
> vers `public_html`, cron) **jamais configuré** : le script était resté rempli de
> `VOTRE-USERNAME`. Le déploiement réel passe par GitHub Actions depuis le début. Les
> garder revenait à proposer à un nouvel arrivant un chemin qui ne mène nulle part, avec
> un `rm -rf` dedans. Ils restent dans l'historique git si besoin.

## Prochaines étapes
- [x] Page Services créée
- [x] Chatbot intégré
- [x] Page À propos créée
- [x] Page Réalisations créée (grille filtrable + cartes interactives)
- [x] Formulaire de contact en modal (remplace page Contact)
- [x] Navigation & boutons reliés aux pages / modal
- [x] Responsive mobile page d'accueil (menu hamburger inclus)
- [x] Images optimisées webp (equipe, bureau, ardila_seogenerator < 100 Ko)
- [x] **Responsive mobile des autres pages** (Services, À propos, Réalisations : heros repliés via classe partagée `.izy-hero`, sections `flexDirection:"row"` repliées en colonne, `.page-shell` appliqué partout)
- [x] Mentions légales + politique de confidentialité remplies
- [ ] Ajouter visuels LinkedIn
- [ ] Blog (reporté)
- [ ] Quand prêt : changer les secrets FTP pour pointer vers localizy.fr (remplacer WordPress)

## Notes
- "Lyon" a été remplacé par "Oise" partout
- Les images réalisations sont dans `public/images/` (webp optimisés < 100 Ko)
- Le WordPress actuel reste sur localizy.fr jusqu'à validation du nouveau site
- Coordonnées : contact@localizy.fr / 07 81 18 94 24 — note Google réelle : 5/5
- Chatbot : `config.js` doit être créé manuellement sur le serveur (contient clés EmailJS)
- Formulaire contact : utilise le template EmailJS `template_mn1zobn` (chatbot : `template_w26i574`)

### Landing IzyRESA

> 🚨 **`public/izy-reservation/index.html` est un fichier GÉNÉRÉ. Ne le modifiez pas ici.**
> La source vit **hors de ce dépôt**, dans `Localizy V2/GTM Revente Salons/build/` :
> `izy-landing.template.html` (le vrai fichier à éditer) + `inline.js` (qui encode
> polices et images en base64). Toute retouche faite directement dans ce dépôt sera
> écrasée à la publication suivante.
>
> **Publier une nouvelle version :**
> 1. éditer `build/izy-landing.template.html` dans le dossier GTM ;
> 2. `node build/inline.js` — il produit trois fichiers ;
> 3. copier **`izy-reservation-site.html`** (le document complet, le seul déployable)
>    vers `public/izy-reservation/index.html` ;
> 4. commit + push.
>
> ⚠️ **Le piège :** `izy-reservation-landing.html` est un *fragment* sans `<head>`,
> destiné à la prévisualisation. Déployé à la place du document complet, il casse la
> page — sans `<meta charset>` les accents deviennent « AchetÃ©e », sans
> `<meta viewport>` le mobile s'affiche en pleine largeur de bureau. **C'est arrivé le
> 29/07/2026.** Le générateur nomme désormais explicitement le seul fichier déployable.
>
> ⚠️ **Toujours comparer la page en ligne au dépôt avant d'écraser.** Les deux ont
> divergé dans les deux sens (intégration EmailJS faite côté serveur, lien de pied de
> page modifié à la main) : une copie aveugle a déjà failli effacer l'intégration qui
> capte les leads.

- Fichier unique `public/izy-reservation/index.html` : HTML/CSS/JS autonome (polices et images en base64), **volontairement hors du système de design Next** pour éviter toute collision avec `globals.css`.
- `og-izy-reservation.png` (1200×630) est le visuel d'aperçu, référencé par `og:image`.
  ⚠️ Il manquait jusqu'au 29/07 : l'URL renvoyait la page « It works! » du serveur, et
  **tout lien partagé par SMS ou WhatsApp s'affichait sans image**. C'est précisément le
  canal visé. Si le visuel change, le redéposer ici, pas seulement dans le dossier GTM.
- **Barre d'action mobile** : sous 640 px, la pastille flottante est remplacée par une
  barre fixe pleine largeur qui se lève quand le bouton du hero sort de l'écran. La
  pastille recouvrait du texte à presque chaque écran, et c'est aussi le seul appel à
  l'action restant en bas de page depuis le retrait de la section finale.
- Servie telle quelle par `output: "export"` (public/ est copié dans out/). URL : `/izy-reservation/`.
- Aucun lien depuis le site (nav, footer, sitemap) → accessible uniquement par son lien. `<meta name="robots" content="noindex, follow">` pour qu'elle ne remonte pas non plus dans Google.
- Les CTA ouvrent le modal intégré à la page, dont l'envoi passe par **EmailJS** avec `service_id`/`public_key` lus dans `/chatbot/config.js` et le template **`template_mn1zobn`** — le même que le formulaire de contact du site : les leads arrivent dans la même boîte, au même format. Les UTM (`?utm_source=…`) et la variante A/B du titre sont joints au lead.
- ⚠️ En `next dev`, `/izy-reservation/` renvoie 404 (le serveur de dev ne résout pas l'index de répertoire du dossier public) : tester `/izy-reservation/index.html`. En prod (Apache o2switch) et dans `out/`, `/izy-reservation/` fonctionne.

### Écriture (⚠️ vaut pour tout le texte publié)
- **Aucun tiret cadratin (« — »).** C'est la ponctuation signature des textes générés par
  une IA, et un lecteur qui la repère cesse de croire au reste. Écrire **un point** quand
  la suite frappe, **une virgule** quand elle enchaîne, **deux-points** quand elle
  explique, et **« · »** quand il ne s'agit que d'un séparateur (titres de page,
  SIREN/SIRET, étapes de formulaire, pied de page). 35 remplacements le 29/07/2026.
- **Le prompt système de l'assistant porte la même consigne** (`public/chatbot/chatbot.js`).
  Sans elle, le modèle en replace à chaque réponse : c'est le seul texte du site que nous
  n'écrivons pas nous-mêmes, et donc le seul qui peut réintroduire la faute tout seul.
- Restent légitimes : les commentaires de code, le demi-cadratin des intervalles
  (`14:00 – 14:30`), et `ÉTAPE 1/5 — PRESTATION` dans la maquette IzyRESA, recopié du
  libellé réel de l'appli d'Adam.
- Ponctuation française dans le HTML autonome : espace fine insécable (`&#8239;`) devant
  `? ! ; %`, insécable (`&nbsp;`) devant `:` et `€`. Sans elles, sur une colonne de
  téléphone, le point d'interrogation tombe seul sur sa ligne.

### Dév mobile / CSS (⚠️ important)
- Site **desktop-first**. Corrections responsive dans un bloc `@media (max-width:767px)` **en fin** de `globals.css` (doit rester en fin : les règles custom sont non-layered, la dernière l'emporte à spécificité égale).
- Conteneur de page = classe `.page-shell` (padding responsive). Utilisée sur **toutes** les pages désormais (home, services, à propos, réalisations).
- Hero « texte à gauche + Izy à droite » = classe partagée `.izy-hero` / `.izy-hero-text` / `.izy-hero-izy` (services, à propos, réalisations). Repli colonne en mobile dans le bloc `@media (max-width:767px)`.
- Sections À propos encore stylées en inline : classes-hook (`.about-why-v2`, `.about-stats-card`, `.about-team-v2b`, `.about-team-mascot`, `.about-values-row`, `.about-approach-v2b`, `.about-approach-divider`) surchargées en mobile avec `!important` (obligatoire pour l'emporter sur le style inline).
- Pour screenshot mobile fidèle : **émulation CDP** (`Emulation.setDeviceMetricsOverride`), pas `chrome --window-size` (n'applique pas le meta viewport → faux débordement).
- Turbopack sert parfois du **CSS périmé** en dev : ne pas `build` pendant que `dev` tourne ; redémarrer avec `rm -rf .next`.
- Push GitHub avec le compte **`Localizy-agence`** (pas `Rickko18`).
