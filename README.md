# 📱 KotoGelo Web (কত গেলো?)

> Smart Daily Expense Tracker & Group Bill Splitting App Landing Website.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **shadcn/ui** design system.

---

## 🚀 Getting Started

To run the web app locally:

```bash
# 1. Navigate to the web folder
cd kotogelo_web

# 2. Install dependencies
pnpm install
# or
npm install

# 3. Start development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

```
kotogelo_web/
├── src/
│   ├── app/                 # Next.js App Router (layout, globals.css, pages)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Modular Landing Page Sections (Hero, Features, etc.)
│   │   ├── shared/          # PhoneMockup, DownloadModal
│   │   └── ui/              # Reusable shadcn/ui primitives (Button, Card, Badge)
│   ├── config/              # Site metadata & navigation links
│   ├── lib/                 # Utility helpers (cn) and constants
│   └── types/               # TypeScript interfaces
├── tailwind.config.ts       # Custom brand theme & shadcn color variables
└── tsconfig.json            # Path alias configuration (@/*)
```
