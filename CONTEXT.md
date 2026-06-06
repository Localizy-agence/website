# Contexte du projet Localizy

## État actuel

Le site est fonctionnel avec Next.js 16 + Tailwind, configuré pour export statique vers OVH.

### Ce qui est en place
- Structure Next.js avec App Router (`src/app/`)
- Design system complet dans `globals.css` (toutes les variables CSS)
- Assets copiés dans `public/` (logos, mascottes, stickers, fonts)
- Composants créés dans `src/components/`
- Page d'accueil fonctionnelle
- Config export statique pour hébergement OVH (`next.config.ts`)

### Fichiers clés
```
src/
├── app/
│   ├── globals.css       # Design system complet
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Underline.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Reviews.tsx
│       ├── Services.tsx
│       ├── Realisations.tsx
│       ├── Pourquoi.tsx
│       ├── Stats.tsx
│       ├── LinkedIn.tsx
│       └── FinalCTA.tsx
├── lib/
│   └── assets.ts         # Registre typé des assets (optionnel)
```

## Problèmes à corriger

### 1. Refaire les composants proprement

Les composants actuels ont été convertis rapidement depuis le prototype. Problèmes :

- **Trop de styles inline** (`style={{...}}`) — difficile à maintenir
- **Variables CSS non utilisées** — les tokens `--space-*`, `--radius-*`, `--text-*` existent mais ne sont pas utilisés
- **Mélange Tailwind / valeurs en dur** — incohérent
- **Problèmes d'alignement et d'espacement**

### 2. Plan de refactoring

Pour chaque composant :

1. **Supprimer les styles inline**
2. **Utiliser les variables CSS du design system** :
   - `--space-*` pour margins/paddings
   - `--radius-*` pour border-radius
   - `--text-*` et `--display-*` pour font-size
   - `--leading-*` pour line-height
   - `--tracking-*` pour letter-spacing
   - `--shadow-*` pour box-shadow
   - `--lz-*` pour les couleurs
3. **Créer des classes Tailwind custom** qui mappent sur les tokens si besoin
4. **Utiliser les classes utilitaires** : `.lz-display`, `.lz-body`, `.lz-eyebrow`, `.lz-meta`, `.lz-card`

### 3. Ordre suggéré

1. `Button.tsx` — composant de base réutilisé partout
2. `Header.tsx` et `Footer.tsx` — présents sur toutes les pages
3. `Hero.tsx` — section principale
4. Autres sections une par une

## Commandes utiles

```bash
# Développement
npm run dev

# Build pour production (génère /out pour OVH)
npm run build

# Le prototype original est sauvegardé dans
~/Desktop/_design-prototype/
```

## Notes

- "Lyon" a été remplacé par "Oise" partout
- Le logo footer était déformé — corrigé avec `object-contain`
- Le registre d'assets typé (`src/lib/assets.ts`) est optionnel mais recommandé
