#!/bin/bash

# ===========================================
# Script de déploiement Localizy Website
# Pour hébergement o2switch
# ===========================================

# Couleurs pour le terminal
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration — À MODIFIER selon votre configuration o2switch
PUBLIC_HTML_PATH="/home/VOTRE-USERNAME/public_html"
# Ou pour un sous-domaine :
# PUBLIC_HTML_PATH="/home/VOTRE-USERNAME/sous-domaine.votredomaine.fr"

echo -e "${YELLOW}🚀 Déploiement Localizy Website${NC}"
echo "=================================="

# 1. Récupérer les dernières modifications
echo -e "\n${YELLOW}📥 Récupération des dernières modifications...${NC}"
git pull origin main
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du git pull${NC}"
    exit 1
fi

# 2. Installation des dépendances
echo -e "\n${YELLOW}📦 Installation des dépendances...${NC}"
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors de npm install${NC}"
    exit 1
fi

# 3. Build du projet
echo -e "\n${YELLOW}🔨 Build du projet...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erreur lors du build${NC}"
    exit 1
fi

# 4. Copie vers public_html
echo -e "\n${YELLOW}📁 Copie vers $PUBLIC_HTML_PATH...${NC}"

# Vérifier que le dossier out/ existe
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Le dossier out/ n'existe pas${NC}"
    exit 1
fi

# Supprimer l'ancien contenu (sauf .htaccess si présent)
if [ -f "$PUBLIC_HTML_PATH/.htaccess" ]; then
    cp "$PUBLIC_HTML_PATH/.htaccess" /tmp/.htaccess_backup
fi

rm -rf "$PUBLIC_HTML_PATH"/*

# Copier le nouveau contenu
cp -r out/* "$PUBLIC_HTML_PATH/"

# Restaurer .htaccess si existait
if [ -f "/tmp/.htaccess_backup" ]; then
    mv /tmp/.htaccess_backup "$PUBLIC_HTML_PATH/.htaccess"
fi

# 5. Terminé
echo -e "\n=================================="
echo -e "${GREEN}✅ Déploiement terminé avec succès !${NC}"
echo -e "Site accessible sur votre domaine o2switch"
