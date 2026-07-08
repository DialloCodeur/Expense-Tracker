# MyFinance - Documentation du projet

## 1. Présentation

MyFinance est une application web de gestion personnelle des finances. Elle permet à un utilisateur de suivre ses revenus et ses dépenses, de consulter un tableau de bord, de filtrer ses transactions et de gérer son profil.

L’application est structurée en deux parties :
- un backend Node.js/Express avec MongoDB
- un frontend React/Vite avec React Router

---

## 2. Objectif du projet

Le but de cette application est de fournir une interface simple pour :
- enregistrer des dépenses
- enregistrer des revenus
- visualiser les montants globaux
- filtrer les dépenses par catégorie ou date
- gérer une session utilisateur sécurisée via JWT

---

## 3. Stack technique

### Frontend
- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React
- jwt-decode

### Backend
- Node.js
- Express
- MongoDB avec Mongoose
- JWT
- bcryptjs
- dotenv

---

## 4. Structure du projet

```text
Expense Tracker/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   ├── server.js
│   ├── test.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── .env_exemple
└── README.md
```

---

## 5. Architecture générale

### Backend
Le backend gère l’authentification, la logique métier et l’accès à la base MongoDB.

#### Points d’entrée
- [backend/server.js](backend/server.js) : démarrage du serveur Express, connexion à MongoDB et enregistrement des routes API.
- [backend/index.js](backend/index.js) : script d’essai de connexion à MongoDB.

#### Routes principales
- [backend/routes/authRoutes.js](backend/routes/authRoutes.js) : inscription et connexion
- [backend/routes/expenseRoutes.js](backend/routes/expenseRoutes.js) : création, lecture, modification, suppression et filtrage des dépenses
- [backend/routes/incomeRoutes.js](backend/routes/incomeRoutes.js) : gestion des revenus
- [backend/routes/userRoutes.js](backend/routes/userRoutes.js) : profil utilisateur

#### Contrôleurs
- [backend/controllers/authController.js](backend/controllers/authController.js) : création du compte utilisateur, connexion, génération du JWT
- [backend/controllers/expenseController.js](backend/controllers/expenseController.js) : CRUD des dépenses et filtres
- [backend/controllers/incomeController.js](backend/controllers/incomeController.js) : gestion des revenus
- [backend/controllers/userController.js](backend/controllers/userController.js) : lecture et mise à jour du profil

#### Modèles Mongoose
- [backend/models/User.js](backend/models/User.js) : modèle utilisateur
- [backend/models/Expense.js](backend/models/Expense.js) : modèle dépense
- [backend/models/Income.js](backend/models/Income.js) : modèle revenu

#### Middleware
- [backend/middlewares/authMiddleware.js](backend/middlewares/authMiddleware.js) : vérifie le token JWT envoyé dans l’en-tête Authorization

### Frontend
Le frontend est une interface React qui permet à l’utilisateur d’interagir avec les données via l’API backend.

#### Structure principale
- [frontend/src/main.jsx](frontend/src/main.jsx) : configuration du routeur et définition des routes
- [frontend/src/App.jsx](frontend/src/App.jsx) : structure globale de l’application, contexte et navigation
- [frontend/src/pages](frontend/src/pages) : pages principales de l’application
- [frontend/src/components](frontend/src/components) : composants réutilisables
- [frontend/store](frontend/store) : contextes React pour les données globales

---

## 6. Flux utilisateur

### 1. Inscription / connexion
- L’utilisateur remplit le formulaire d’inscription ou de connexion.
- Le frontend envoie une requête à l’API backend.
- Si la connexion réussit, un token JWT est stocké dans le localStorage.
- Ce token est ensuite utilisé pour toutes les requêtes protégées.

### 2. Tableau de bord
- Au chargement du tableau de bord, l’application récupère les dépenses et les revenus de l’utilisateur connecté.
- Les montants sont utilisés pour calculer un résumé global.
- Les dépenses récentes sont affichées dans la liste.

### 3. Ajout d’une dépense
- L’utilisateur saisit le montant, la catégorie, la date et la description.
- Une requête POST est envoyée vers l’API.
- La dépense est enregistrée en base et ajoutée à l’interface.

### 4. Ajout d’un revenu
- L’utilisateur saisit un montant.
- Une requête POST est envoyée à l’API des revenus.
- Le montant est pris en compte dans le résumé.

### 5. Filtrage
- L’utilisateur peut filtrer les dépenses par catégorie.
- L’interface applique le filtre localement sur les données déjà chargées.

---

## 7. API backend

### Authentification
- POST /api/auth/register
  - crée un utilisateur
  - retourne un token JWT
- POST /api/auth/login
  - authentifie l’utilisateur
  - retourne un token JWT

### Dépenses
- POST /api/expenses
  - crée une dépense pour l’utilisateur connecté
- GET /api/expenses
  - récupère toutes les dépenses de l’utilisateur connecté
- PATCH /api/expenses/:id
  - met à jour une dépense
- DELETE /api/expenses/:id
  - supprime une dépense

### Revenus
- POST /api/income
  - crée un revenu
- GET /api/income
  - récupère les revenus de l’utilisateur connecté
- PATCH /api/income
  - met à jour le revenu utilisateur

### Profil
- GET /api/users/profile
  - retourne les informations du profil utilisateur

---

## 8. Configuration locale

### Variables d’environnement
Créez un fichier .env à la racine du dossier backend (ou copiez [./.env_exemple](.env_exemple)) avec :

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Lancer le backend
```bash
cd backend
npm install
node server.js
```

### Lancer le frontend
```bash
cd frontend
npm install
npm run dev
```

Le frontend sera disponible sur l’adresse locale fournie par Vite.

---

## 9. Pages principales du frontend

- [frontend/src/pages/home.jsx](frontend/src/pages/home.jsx) : page d’accueil marketing
- [frontend/src/pages/login.jsx](frontend/src/pages/login.jsx) : formulaire de connexion
- [frontend/src/pages/register.jsx](frontend/src/pages/register.jsx) : formulaire d’inscription
- [frontend/src/pages/dashboard.jsx](frontend/src/pages/dashboard.jsx) : tableau de bord principal
- [frontend/src/pages/update-expense.jsx](frontend/src/pages/update-expense.jsx) : formulaire de mise à jour d’une dépense
- [frontend/src/pages/update-income.jsx](frontend/src/pages/update-income.jsx) : formulaire de mise à jour d’un revenu
- [frontend/src/pages/add-expense.jsx](frontend/src/pages/add-expense.jsx) : page d’ajout de dépense (version simplifiée)
- [frontend/src/pages/reports.jsx](frontend/src/pages/reports.jsx) : page de rapports (placeholder)

---

## 10. Composants clés

- [frontend/src/components/Navbar.jsx](frontend/src/components/Navbar.jsx) : barre de navigation et menu utilisateur
- [frontend/src/components/SummaryCards.jsx](frontend/src/components/SummaryCards.jsx) : cartes de résumé
- [frontend/src/components/RecentExpenses.jsx](frontend/src/components/RecentExpenses.jsx) : liste des dépenses récentes
- [frontend/src/components/AddExpenseInput.jsx](frontend/src/components/AddExpenseInput.jsx) : formulaire d’ajout de dépense
- [frontend/src/components/AddIncomeInput.jsx](frontend/src/components/AddIncomeInput.jsx) : formulaire d’ajout de revenu
- [frontend/src/components/QuickActions.jsx](frontend/src/components/QuickActions.jsx) : actions rapides depuis le tableau de bord
- [frontend/src/components/Charts.jsx](frontend/src/components/Charts.jsx) : zone prévue pour les graphiques

---

## 11. Points d’attention et améliorations possibles

Ce projet est fonctionnel dans sa logique de base, mais plusieurs points méritent une amélioration :

- Le backend contient encore quelques bugs à corriger, notamment dans la logique de mise à jour des revenus.
- Les routes de filtrage des dépenses et la route utilisateur pourraient être clarifiées pour éviter les conflits.
- Les pages de rapports et certaines interfaces sont encore incomplètes.
- L’état global pourrait être amélioré avec une meilleure gestion des données et du rafraîchissement après modification.
- Le stockage du token dans le localStorage est pratique pour le développement, mais il serait préférable d’utiliser des cookies HttpOnly en production.

---

## 12. Conseils pour les futurs collaborateurs

- Commencez toujours par lire le backend puis le frontend.
- Comprenez le flux d’authentification avant de modifier les pages protégées.
- Vérifiez les routes API et les modèles avant d’ajouter de nouvelles fonctionnalités.
- Ajoutez des commentaires et de la documentation au fur et à mesure de l’évolution du projet.
- Avant de changer la logique métier, vérifiez le comportement actuel dans le tableau de bord et les composants associés.

---

## 13. Résumé rapide

Ce projet est une application de suivi financier personnelle en full stack. Il permet de gérer des dépenses et des revenus avec une authentification JWT, une interface React et une base MongoDB.

Si vous débutez sur ce projet, le point d’entrée recommandé est :
- [frontend/src/pages/dashboard.jsx](frontend/src/pages/dashboard.jsx) pour comprendre l’expérience utilisateur principale
- [backend/server.js](backend/server.js) pour comprendre l’architecture serveur
- [backend/routes](backend/routes) pour découvrir les endpoints disponibles
