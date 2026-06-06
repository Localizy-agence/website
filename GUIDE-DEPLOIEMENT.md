# Guide de déploiement automatique sur o2switch

Ce guide explique comment déployer automatiquement une app Next.js (ou autre) sur o2switch via GitHub Actions.

## Prérequis

- Un compte GitHub (Localizy-agence)
- Un hébergement o2switch avec accès cPanel
- Terminal connecté à GitHub (`gh auth login`)

---

## Étapes

### 1. Créer le repo GitHub

1. Va sur https://github.com/new
2. Crée le repo (ex: `nom-du-projet`)
3. Clone-le en local ou initialise git dans ton projet existant :

```bash
cd ton-projet
git init
git remote add origin https://github.com/Localizy-agence/nom-du-projet.git
```

### 2. Ajouter le workflow GitHub Actions

Crée le fichier `.github/workflows/deploy.yml` :

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_HOST }}
          username: ${{ secrets.FTP_USER }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./out/
          server-dir: /
```

> **Note** : Adapte `local-dir` selon ton projet :
> - Next.js (export statique) : `./out/`
> - Vite : `./dist/`
> - Autre : le dossier de build

### 3. Créer le sous-domaine sur o2switch

1. Va dans cPanel > **Sous-domaines**
2. Crée le sous-domaine (ex: `app.localizy.fr`)
3. Note le chemin : `/home/gjse6165/app.localizy.fr`

### 4. Créer le compte FTP

1. Va dans cPanel > **Comptes FTP**
2. Crée un compte :
   - **Connexion** : `website` (ou autre, PAS "deploy")
   - **Domaine** : `app.localizy.fr`
   - **Mot de passe** : Génère-le et **copie-le**
   - **Répertoire** : `app.localizy.fr` (sans suffixe supplémentaire)
3. Clique "Créer un compte FTP"

### 5. Configurer les secrets GitHub

1. Va sur `https://github.com/Localizy-agence/nom-du-projet/settings/secrets/actions`
2. Ajoute 3 secrets :

| Name | Value |
|------|-------|
| `FTP_HOST` | `ftp.localizy.fr` |
| `FTP_USER` | `website@app.localizy.fr` |
| `FTP_PASSWORD` | *(le mot de passe copié)* |

### 6. Push et déployer

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

Le déploiement se lance automatiquement. Vérifie sur :
- GitHub : `https://github.com/Localizy-agence/nom-du-projet/actions`
- Site : `https://app.localizy.fr`

### 7. Certificat SSL (optionnel)

1. cPanel > **SSL/TLS Status** ou **Let's Encrypt**
2. Sélectionne le sous-domaine
3. Clique "Run AutoSSL" ou "Émettre"

---

## Workflow quotidien

```bash
# Modifier le code
git add .
git commit -m "Description des changements"
git push
# -> Déploiement automatique !
```

---

## Dépannage

### Le workflow échoue avec "ENOTFOUND"
- Vérifie que `FTP_HOST` est bien `ftp.localizy.fr` (pas `ftp.app.localizy.fr`)

### Les fichiers sont dans un sous-dossier
- Le compte FTP pointe vers le mauvais répertoire
- Supprime-le et recrée-le avec le bon chemin (sans suffixe après le domaine)

### Le site affiche "Index of /"
- Le build n'a pas généré de fichier `index.html`
- Vérifie que `npm run build` fonctionne en local

---

## Configuration Next.js pour export statique

Dans `next.config.ts` :

```typescript
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
```

---

## Ajouter un collaborateur

1. GitHub > Settings > Collaborators
2. "Add people" > Entre le username/email
3. Il accepte l'invitation et fait `gh auth login` sur son terminal
