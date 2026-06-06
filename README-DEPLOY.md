# Déploiement Localizy Website sur o2switch

## Prérequis

- Accès SSH à votre hébergement o2switch
- Node.js 18+ installé sur le serveur (via nvm ou gestionnaire de version o2switch)
- Git installé sur le serveur

## Configuration initiale

### 1. Cloner le repo sur o2switch

```bash
cd ~
git clone https://github.com/VOTRE-USERNAME/localizy-website.git
cd localizy-website
```

### 2. Configurer le script de déploiement

Éditer `deploy.sh` et modifier la variable `PUBLIC_HTML_PATH` :

```bash
# Pour le domaine principal :
PUBLIC_HTML_PATH="/home/votre-username-o2switch/public_html"

# Pour un sous-domaine :
PUBLIC_HTML_PATH="/home/votre-username-o2switch/localizy.votredomaine.fr"
```

### 3. Rendre le script exécutable

```bash
chmod +x deploy.sh
```

### 4. Variables d'environnement (optionnel)

Si vous utilisez des variables d'environnement :

```bash
cp .env.example .env.local
nano .env.local  # Remplir les valeurs
```

## Déploiement manuel

```bash
cd ~/localizy-website
./deploy.sh
```

## Déploiement automatique via Cron

### Configuration du cron o2switch

1. Connectez-vous à cPanel o2switch
2. Allez dans "Tâches Cron"
3. Ajoutez une nouvelle tâche :

**Toutes les 15 minutes :**
```
*/15 * * * * cd /home/votre-username/localizy-website && ./deploy.sh >> /home/votre-username/logs/deploy.log 2>&1
```

**Toutes les heures :**
```
0 * * * * cd /home/votre-username/localizy-website && ./deploy.sh >> /home/votre-username/logs/deploy.log 2>&1
```

**Une fois par jour à 6h :**
```
0 6 * * * cd /home/votre-username/localizy-website && ./deploy.sh >> /home/votre-username/logs/deploy.log 2>&1
```

### Créer le dossier de logs

```bash
mkdir -p ~/logs
```

## Structure des fichiers générés

```
out/
├── index.html
├── _next/
│   └── static/
├── images/
├── stickers/
└── ...
```

## Dépannage

### Le build échoue

```bash
# Vérifier la version de Node
node -v  # Doit être >= 18

# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

### Les images ne s'affichent pas

Vérifiez que `next.config.ts` contient bien :
```ts
images: { unoptimized: true }
trailingSlash: true
```

### Erreur de permissions

```bash
chmod -R 755 ~/public_html
```
