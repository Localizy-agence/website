# Intégration Chatbot Localizy

## Contenu du dossier

```
integration-site/
├── chatbot.js        ← Moteur (à commiter)
├── chatbot.css       ← Styles (à commiter)
├── assets/
│   └── izy-coucou.webp   ← Mascotte (à commiter)
├── config.js         ← ⚠️ CONTIENT LES CLÉS — NE PAS COMMITER
└── INSTRUCTIONS.md   ← Ce fichier
```

---

## Étape 1 : Copier dans ton repo site

Copie le dossier `integration-site/` dans ton repo et renomme-le `chatbot/` :

```
ton-site/
├── chatbot/
│   ├── chatbot.js      ✅ commité
│   ├── chatbot.css     ✅ commité
│   └── assets/
│       └── izy-coucou.webp   ✅ commité
└── index.html
```

---

## Étape 2 : Ajouter au .gitignore

Dans le `.gitignore` à la racine de ton site :

```gitignore
# Chatbot config (contient les clés API)
chatbot/config.js
```

---

## Étape 3 : Intégration HTML

Ajouter ces lignes **avant la balise `</body>`** sur toutes les pages où tu veux le chatbot :

```html
<!-- Chatbot Localizy -->
<link rel="stylesheet" href="/chatbot/chatbot.css">
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script src="/chatbot/config.js"></script>
<script src="/chatbot/chatbot.js"></script>
```

---

## Étape 4 : Déploiement sur O2switch

### A. Push GitHub (sans config.js)

```bash
git add chatbot/chatbot.js chatbot/chatbot.css chatbot/assets/
git commit -m "feat: ajout chatbot Localizy"
git push
```

### B. Créer config.js sur O2switch (une seule fois)

1. Connecte-toi à **cPanel O2switch**
2. Ouvre **Gestionnaire de fichiers**
3. Va dans `public_html/chatbot/`
4. Clique **+ Fichier** → nomme-le `config.js`
5. Clique droit → **Modifier** → colle le contenu de `config.js` avec tes vraies clés
6. **Enregistrer**

### C. Vérifier

- Visite `https://localizy.fr/chatbot/config.js` → doit afficher la config
- Visite `https://localizy.fr` → le chatbot doit apparaître en bas à droite

---

## Mise à jour future

- **Modifier le comportement** : édite `config.js` via cPanel (pas besoin de redéployer)
- **Modifier le moteur** : édite `chatbot.js` localement → push → tire sur O2switch

---

## Checklist finale

- [ ] `chatbot/config.js` ajouté au `.gitignore`
- [ ] Fichiers `chatbot.js`, `chatbot.css`, `assets/` commités et pushés
- [ ] `config.js` créé manuellement sur O2switch via cPanel
- [ ] Test sur le site en ligne : bulle Izy visible, conversation fonctionnelle
