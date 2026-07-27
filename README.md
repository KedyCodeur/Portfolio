#  Kedy Portfolio

Portfolio personnel de **Cem Sah Ozdemirel**, étudiant en informatique à SUPINFO Paris et développeur full-stack. Site moderne, réactif et visuellement soigné, construit avec React et des animations 3D/interactives.

🔗 **Live :** [kedycodeur.vercel.app](https://kedycodeur.vercel.app)

---

## 📋 Sommaire

- [À propos](#-à-propos)
- [Stack technique](#-stack-technique)
- [Installation](#-installation)
- [Scripts disponibles](#-scripts-disponibles)
- [Structure du projet](#-structure-du-projet)
- [Déploiement](#-déploiement)
- [Contact](#-contact)

---

## 👤 À propos

Ce portfolio présente le parcours, les compétences et les projets de Cem, actuellement étudiant en informatique à SUPINFO Paris, disponible pour un stage à partir de **mai 2026**. Le site met en avant des expériences web modernes construites avec React, JavaScript et Python.

---

## 🛠 Stack technique

| Catégorie | Technologies |
|---|---|
| **Framework** | React 19 |
| **Build tool** | Vite 8 |
| **Animations UI** | Framer Motion |
| **3D / Graphismes** | Three.js |
| **Debug / Contrôles dev** | dat.GUI, stats.js |
| **Qualité de code** | ESLint (react-hooks, react-refresh) |
| **Déploiement** | Vercel + GitHub Pages (`gh-pages`) |
| **CI** | GitHub Actions (`.github/workflows`) |

---

## 📦 Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/KedyCodeur/Portfolio.git
cd Portfolio
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera disponible sur `http://localhost:5173` (port par défaut de Vite).

---

## 📜 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Démarre le serveur de développement Vite avec HMR |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Analyse le code avec ESLint |
| `npm run deploy` | Build puis déploie sur GitHub Pages via `gh-pages` |

---

## 📁 Structure du projet

```
Portfolio/
├── .github/workflows/   # Workflows CI/CD (GitHub Actions)
├── public/              # Assets statiques (favicon, images, preview OG...)
├── src/                 # Code source de l'application React
│   └── main.jsx         # Point d'entrée
├── index.html           # Template HTML principal
├── vite.config.js        # Configuration Vite
├── eslint.config.js      # Configuration ESLint
└── package.json
```

---

## 🚀 Déploiement

Le projet est déployé automatiquement sur **Vercel**. Un déploiement alternatif via **GitHub Pages** est également disponible :

```bash
npm run deploy
```

Cette commande build le projet puis publie le contenu de `dist/` sur la branche `gh-pages`.

---

## 📬 Contact

**Cem Sah Ozdemirel (KedyCodeur)**
🎓 Étudiant en informatique — SUPINFO Paris
💼 Disponible pour un stage à partir de mai 2026
🔗 [GitHub](https://github.com/KedyCodeur) · [Portfolio](https://kedycodeur.vercel.app)

---

⭐️ N'hésitez pas à laisser une étoile si ce projet vous plaît !
