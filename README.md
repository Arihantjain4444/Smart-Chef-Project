# SmartChef 🍳

A production-ready React + Vite + Bootstrap web app that generates recipes based on ingredients, time, and mood. Includes recipe detail pages with dynamic serving scaling, nutrition charts, fullscreen step-by-step cooking mode with timers, and an auto grocery list generator.

## Features

- **Recipe Discovery** – Filter recipes by ingredients, time, and mood
- **Recipe Detail** – Dynamic serving scaling, nutrition charts (doughnut), ingredient list
- **Cooking Mode** – Fullscreen step-by-step mode with built-in timers
- **Grocery List** – Auto-generate from recipes or add items manually
- **Dark Mode** – Toggle between light and dark themes
- **Responsive UI** – Modern SaaS-style layout, Bootstrap 5
- **Global State** – Zustand store with persistence (dark mode, grocery list)
- **Routing** – React Router v7
- **Loading States** – Spinners during mock API calls

## Tech Stack

- **React 19** (JavaScript)
- **Vite 7**
- **Bootstrap 5**
- **React Router DOM 7**
- **Zustand**
- **Chart.js** / react-chartjs-2

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI
│   │   ├── LoadingSpinner.jsx
│   │   └── PageHeader.jsx
│   ├── layout/
│   │   └── Navbar.jsx
│   └── recipe/
│       ├── NutritionChart.jsx
│       ├── RecipeCard.jsx
│       └── ServingSelector.jsx
├── data/
│   └── mockRecipes.js   # Mock recipes & constants
├── pages/
│   ├── HomePage.jsx
│   ├── RecipeDetailPage.jsx
│   ├── CookingModePage.jsx
│   └── GroceryListPage.jsx
├── store/
│   └── useAppStore.js   # Zustand global state
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home – recipe discovery with filters |
| `/recipe/:id` | Recipe detail with scaling & nutrition |
| `/recipe/:id/cook` | Fullscreen cooking mode with timers |
| `/grocery` | Grocery list management |

## Mock Data

The app uses `mockRecipes.js` with sample recipes. Replace with real API calls when integrating a backend.
