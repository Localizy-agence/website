# Localizy — site web

Site vitrine de l'agence, en Next.js exporté en statique et déployé sur o2switch.

- **Production** : https://localizy.fr
- **Recette** : https://new.localizy.fr
- **Contexte du projet** : [`CONTEXT.md`](CONTEXT.md) — à lire en premier, c'est là que
  vivent les décisions, les pièges connus et les conventions CSS.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # export statique dans out/
```

> ⚠️ Ne pas lancer `build` pendant que `dev` tourne : Turbopack sert alors du CSS périmé.
> En cas de doute, `rm -rf .next`.

## Déployer

**Un `git push` sur `main` suffit.** GitHub Actions construit le site et l'envoie par FTP
(`.github/workflows/deploy.yml`). Compter 2 à 4 minutes.

Pas de script à lancer, pas de SSH. La mise en place du pipeline est documentée dans
[`GUIDE-DEPLOIEMENT.md`](GUIDE-DEPLOIEMENT.md) si elle doit être refaite ailleurs.

> Pousser avec le compte **`Localizy-agence`**.

## Ce que contient le dépôt

| Chemin | |
|---|---|
| `src/app/` | Les pages (accueil, services, réalisations, à propos, mentions légales, confidentialité) |
| `src/components/` | Composants partagés, dont le modal de contact en 3 étapes |
| `src/app/globals.css` | **Toute** la CSS. Les correctifs mobiles vivent dans un bloc en fin de fichier, et doivent y rester |
| `public/chatbot/` | L'assistant conversationnel, en JS autonome |
| `public/izy-reservation/` | La landing IzyRESA — **fichier généré, voir ci-dessous** |

### ⚠️ La landing IzyRESA ne se modifie pas ici

`public/izy-reservation/index.html` est **produit par un générateur qui vit hors de ce
dépôt** (`Localizy V2/GTM Revente Salons/build/`). Une modification faite directement ici
sera écrasée à la prochaine publication. Détail et procédure dans [`CONTEXT.md`](CONTEXT.md).

## Deux clés hors dépôt

`public/chatbot/config.js` porte les clés EmailJS et **n'est pas versionné** : il est créé
à la main sur le serveur. En local, le formulaire de contact et l'assistant signalent donc
qu'ils ne sont pas branchés. C'est le comportement voulu.

## Règle d'écriture

Pas de tiret cadratin dans le texte publié : c'est la ponctuation qui trahit un texte généré
par une IA. Écrire un point, une virgule ou deux-points selon ce que la phrase demande, et
« · » quand il ne s'agit que d'un séparateur. Le prompt de l'assistant porte la même
consigne, sans quoi il en produit à chaque réponse.
