# Glassly — Glassmorphism Analytics Dashboard

A responsive, premium dark analytics dashboard built with **React + Vite**, **Tailwind CSS**, **Redux Toolkit**, **Recharts**, and **Lucide React**. The visual direction follows the provided reference: translucent glass panels, blue-violet accents, soft glows, clean data visualization, and a mobile-friendly layout.

## Features
- Responsive sidebar with navigation and workspace card
- Glass-style KPI cards with miniature trend charts
- Interactive revenue chart with 7-day, 30-day, and 90-day ranges (Redux state)
- Traffic sources donut visualization and progress bars
- Recent orders table with status indicators
- Search field, notification popover, toast feedback, and CSV report export
- Mobile navigation drawer and responsive layout

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Extract this project and push the folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**.

All displayed business figures are demo data; replace them with your API data when ready. Redux Toolkit currently manages the selected chart period, active navigation item, and notification panel state.
