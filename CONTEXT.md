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
- Homepage complète avec toutes les sections
- Page Services complète avec navigation sticky tabs
- Page À propos avec hero Izy, stats, valeurs, approche
- Page Réalisations avec grille filtrable par catégorie
- Formulaire de contact en modal (3 étapes, EmailJS)
- Design system complet dans `globals.css`
- Carousel avis Google (9 avis réels)
- Section réalisations avec images clients
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
│   └── realisations/
│       └── page.tsx      # Page Réalisations (grille filtrable)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
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
- [x] Page Réalisations créée (grille filtrable avec placeholders)
- [x] Formulaire de contact en modal (remplace page Contact)
- [ ] Ajouter les vrais projets sur la page Réalisations
- [ ] Optimiser les images (< 100 Ko chacune)
- [ ] Ajouter visuels LinkedIn
- [ ] Quand prêt : changer les secrets FTP pour pointer vers localizy.fr (remplacer WordPress)

## Notes
- "Lyon" a été remplacé par "Oise" partout
- Les images réalisations sont dans `public/images/`
- Le WordPress actuel reste sur localizy.fr jusqu'à validation du nouveau site
- Coordonnées : contact@localizy.fr / 07 81 18 94 24
- Chatbot : `config.js` doit être créé manuellement sur le serveur (contient clés EmailJS)
- Formulaire contact : utilise le template EmailJS `template_mn1zobn` (chatbot : `template_w26i574`)
