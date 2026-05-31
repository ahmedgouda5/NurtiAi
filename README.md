<div align="center">

<img src="public/logo.svg" alt="NutriAI Logo" width="80" />

# NutriAI

**AI-Powered Health, Nutrition & Fitness Platform for the MENA Region**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-00D68F?style=flat-square)](LICENSE)

[Live Demo](https://nutriai.app) · [Report Bug](https://github.com/nutriai/app/issues) · [Request Feature](https://github.com/nutriai/app/issues)

---

> **Track nutrition. Scan meals. Get AI-powered workout plans.**  
> Available in Arabic & English — built for Egypt, UAE, Saudi Arabia, and beyond.

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

NutriAI is a full-stack AI health platform designed specifically for the MENA market. It combines intelligent food scanning, personalized workout plans, real-time coaching, and detailed analytics — all in a single Arabic-first application.

The platform addresses a critical gap: **67% of MENA adults are physically inactive** (WHO 2024), yet no existing app offers a complete, locally-aware solution with Egyptian food support, RTL interfaces, and EGP-based pricing.

---

## Features

| Feature | Description |
|---|---|
| 📷 **AI Food Scanner** | Snap a photo, get instant macros & micros. Supports 12,000+ Egyptian & MENA foods |
| 📊 **Smart Analytics** | Weekly/monthly calorie trends, weight trajectory, macro breakdowns |
| 🏋️ **AI Workout Plans** | Personalized exercise plans that adapt to your real progress |
| 👨‍⚕️ **Coach & Doctor Sessions** | Book 1-on-1 sessions with certified trainers who see your live data |
| ⚖️ **Weight Prediction** | 30-day AI-powered weight forecast based on your habits |
| 👥 **Community Challenges** | Step challenges, streaks, leaderboards, and social accountability |
| 🌍 **Bilingual UI** | Full Arabic (RTL) + English support with seamless switching |
| 💰 **EGP Pricing** | Local currency pricing — EGP 199/month, EGP 1,499/year |

---

## Tech Stack

**Frontend**
- [Next.js 15](https://nextjs.org) — App Router, Server Components
- [TypeScript](https://www.typescriptlang.org) — Type-safe codebase
- [Tailwind CSS](https://tailwindcss.com) — Utility-first styling
- [Syne + Outfit](https://fonts.google.com) — Display & body typography via `next/font`
- [Chart.js](https://chartjs.org) — Analytics visualizations
- [Framer Motion](https://www.framer.com/motion) — Animations & transitions

**Backend / AI**
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) — Serverless endpoints
- [OpenAI API](https://openai.com) — Food analysis & AI coaching
- [Prisma](https://prisma.io) — ORM & database schema
- [PostgreSQL](https://www.postgresql.org) — Primary database

**Infrastructure**
- [Vercel](https://vercel.com) — Hosting & edge deployment
- [Cloudinary](https://cloudinary.com) — Food image storage & processing
- [Stripe](https://stripe.com) — Subscription payments (EGP support)

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**
- A PostgreSQL database (local or hosted)
- OpenAI API key

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/nutriai/app.git
cd app
```

**2. Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

**3. Set up environment variables**

```bash
cp .env.example .env.local
```

Fill in your values — see [Environment Variables](#environment-variables) below.

**4. Set up the database**

```bash
npx prisma generate
npx prisma db push
```

**5. Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The app auto-updates as you edit files. Start with `app/page.tsx`.

---

## Project Structure

```
nutriai/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Auth routes: login, signup
│   ├── (dashboard)/            # Protected dashboard routes
│   │   ├── overview/
│   │   ├── food-log/
│   │   ├── workouts/
│   │   ├── progress/
│   │   └── profile/
│   ├── api/                    # API route handlers
│   │   ├── analyze-food/       # AI food scanner endpoint
│   │   ├── workout-plan/       # AI workout generation
│   │   ├── coach/              # Coach booking
│   │   └── stripe/             # Payment webhooks
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                # Landing page
│
├── components/
│   ├── ui/                     # Reusable UI primitives
│   ├── dashboard/              # Dashboard-specific components
│   ├── landing/                # Landing page sections
│   ├── scanner/                # Food scanner component
│   └── charts/                 # Chart.js wrappers
│
├── lib/
│   ├── ai/                     # OpenAI integration
│   ├── db/                     # Prisma client
│   ├── auth/                   # Auth utilities
│   └── utils.ts
│
├── prisma/
│   └── schema.prisma
│
├── public/
│   ├── logo.svg
│   └── foods/                  # Local food image assets
│
├── messages/                   # i18n translations
│   ├── ar.json                 # Arabic (RTL)
│   └── en.json                 # English
│
└── types/                      # Global TypeScript types
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nutriai"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"

# OpenAI — AI food analysis & coaching
OPENAI_API_KEY="sk-..."

# Cloudinary — Image uploads
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Stripe — Payments
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

> **Never commit `.env.local` to version control.** It is already listed in `.gitignore`.

---

## Available Scripts

```bash
# Development
npm run dev           # Start dev server at localhost:3000

# Production build
npm run build         # Build optimized production bundle
npm run start         # Start production server

# Code quality
npm run lint          # Run ESLint
npm run type-check    # Run TypeScript compiler check
npm run format        # Run Prettier formatter

# Database
npm run db:push       # Push schema changes to database
npm run db:studio     # Open Prisma Studio (visual DB editor)
npm run db:seed       # Seed database with demo data

# Testing
npm run test          # Run Jest unit tests
npm run test:e2e      # Run Playwright end-to-end tests
```

---

## Deployment

### Deploy on Vercel (Recommended)

The fastest way to deploy NutriAI is via the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=nutriai)

**Steps:**
1. Push your code to GitHub
2. Import the repository on Vercel
3. Add all environment variables from `.env.local`
4. Click **Deploy**

Vercel automatically handles:
- Serverless API routes
- Edge caching
- HTTPS certificates
- Preview deployments per pull request

### Other Platforms

NutriAI can also be deployed on any Node.js-compatible platform:

```bash
npm run build
npm run start
```

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for Docker, AWS, and other options.

---

## Localization

NutriAI supports Arabic and English out of the box using [`next-intl`](https://next-intl-docs.vercel.app).

- Arabic content is stored in `messages/ar.json` with RTL layout applied globally
- English content is in `messages/en.json`
- Language is detected automatically from the browser, and can be toggled in the app header

To add a new language, create `messages/[locale].json` and add the locale to `i18n.ts`.

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/your-feature-name`
3. Commit your changes — `git commit -m 'feat: add your feature'`
4. Push to the branch — `git push origin feature/your-feature-name`
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting. All contributions must pass linting and type-checking CI checks.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — features and API reference
- [Learn Next.js](https://nextjs.org/learn) — interactive tutorial
- [Next.js GitHub](https://github.com/vercel/next.js) — feedback and contributions welcome
- [Prisma Docs](https://www.prisma.io/docs) — database ORM
- [OpenAI API Reference](https://platform.openai.com/docs) — AI integrations

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">

Built with ❤️ for the MENA region

🇪🇬 Egypt &nbsp;·&nbsp; 🇦🇪 UAE &nbsp;·&nbsp; 🇸🇦 Saudi Arabia &nbsp;·&nbsp; 🇯🇴 Jordan &nbsp;·&nbsp; 🇰🇼 Kuwait

</div>
