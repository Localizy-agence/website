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
- Page Mentions légales (placeholder à remplir)
- Formulaire de contact en modal (3 étapes, EmailJS)
- Design system complet dans `globals.css` (+ bloc `@media (max-width:767px)` mobile en fin de fichier)
- Navigation & boutons tous reliés (pages ou modal contact)
- Carousel avis Google (9 avis réels)
- Chatbot Localizy intégré sur toutes les pages
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
│   └── mentions-legales/
│       └── page.tsx      # Mentions légales (placeholder à remplir)
├── components/
│   ├── Header.tsx           # Nav + menu hamburger mobile
│   ├── Footer.tsx           # Client (lien Contact = modal)
│   ├── RealisationCard.tsx  # 3 modes: scroll molette / visuel fixe / sans visuel
│   ├── ContactButton.tsx    # Bouton qui ouvre le modal contact
│   ├── ContactModal.tsx     # Modal contact 3 étapes + EmailJS
│   ├── ClientProviders.tsx  # Provider pour le modal
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
- `GUIDE-DEPLOIEMENT.md` — Guide complet pour déployer une nouvelle app
- `README-DEPLOY.md` — Documentation technique déploiement

## Prochaines étapes
- [x] Page Services créée
- [x] Chatbot intégré
- [x] Page À propos créée
- [x] Page Réalisations créée (grille filtrable + cartes interactives)
- [x] Formulaire de contact en modal (remplace page Contact)
- [x] Navigation & boutons reliés aux pages / modal
- [x] Responsive mobile page d'accueil (menu hamburger inclus)
- [x] Images optimisées webp (equipe, bureau, ardila_seogenerator < 100 Ko)
- [ ] **Responsive mobile des autres pages** (Services, À propos, Réalisations — layouts `flexDirection:"row"` + zones Izy largeur fixe à replier ; leur appliquer aussi `.page-shell`)
- [ ] Remplir la page Mentions légales (infos client)
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

### Dév mobile / CSS (⚠️ important)
- Site **desktop-first**. Corrections responsive dans un bloc `@media (max-width:767px)` **en fin** de `globals.css` (doit rester en fin : les règles custom sont non-layered, la dernière l'emporte à spécificité égale).
- Conteneur de page = classe `.page-shell` (padding responsive). La home l'utilise ; les autres pages ont encore un padding inline à migrer.
- Pour screenshot mobile fidèle : **émulation CDP** (`Emulation.setDeviceMetricsOverride`), pas `chrome --window-size` (n'applique pas le meta viewport → faux débordement).
- Turbopack sert parfois du **CSS périmé** en dev : ne pas `build` pendant que `dev` tourne ; redémarrer avec `rm -rf .next`.
- Push GitHub avec le compte **`Localizy-agence`** (pas `Rickko18`).
