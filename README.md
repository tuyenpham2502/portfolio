# Tuyen Pham - Personal Portfolio

[![Website](https://img.shields.io/badge/Visit%20Website-brightgreen)](https://tuyenpham.online)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&style=flat-square)](https://nextjs.org/)
[![Sanity](https://img.shields.io/badge/Sanity-black?logo=sanity&style=flat-square)](https://www.sanity.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?logo=tailwindcss&style=flat-square)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel&style=flat-square)](https://vercel.com/)

## 🌐 Project Overview

Welcome to my personal portfolio website, a showcase of my professional journey, technical skills, and creative endeavors. Built with cutting-edge web technologies, this site offers an immersive experience into my world of development and design.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Integrations](#-integrations)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Personal Blog:** In-depth technical insights and personal experiences
- **Interactive Project Portfolio:** Showcasing development and design work
- **Photography Gallery:** Visual storytelling through photography
- **"Uses" Page:** Detailed breakdown of my daily tools and software
- **Guestbook:** Interactive visitor messaging system
- **Protected Dashboard:** Personalized stats and insights
- **Spotify Integration:** Real-time music listening tracker
- **WakaTime Coding Stats:** Transparent view of coding activities
- **Responsive Dark/Light Themes**
- **MDX-Powered Blog Posts:** Rich, interactive content
- **SEO Optimized:** Enhanced search engine visibility
- **Contact Form:** Web3Forms integration with Cloudflare Turnstile protection
- **Email Notifications:** Automated email system using NodeMailer

## 🚀 Technologies

- **Frontend Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content Management:** Sanity CMS
- **Authentication:** NextAuth.js, Firebase
- **Deployment:** Vercel
- **Form Handling:** Web3Forms
- **Security:** Cloudflare Turnstile
- **Email Service:** NodeMailer
- **Additional Libraries:**
  - Framer Motion
  - Recharts
  - Shadcn/ui
  - Lucide React

## 🔧 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or Yarn
- Sanity CLI
- Firebase Project
- Spotify Developer Account
- WakaTime Account
- Google OAuth Credentials
- GitHub OAuth Credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tuyen-pham/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

Create a `.env.local` file with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Spotify Integration
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=

# WakaTime Integration
WAKATIME_ACCESS_TOKEN=
WAKATIME_CLIENT_ID=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Github OAuth
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Analytics
UMAMI_API_KEY=
WEBSITE_ID=

# Web3Forms
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=

# Cloudflare Turnstile
NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY=

# NodeMailer
GMAIL_USER=
GMAIL_PASS=
NEXT_PUBLIC_ADMIN_EMAIL=

# Timezone
NEXT_PUBLIC_TIMEZONEDB_API_KEY=
```

### Running the Project

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📂 Project Structure

```
portfolio/
├── app/                    # Next.js app directory with route handlers
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── projects/          # Projects pages
│   ├── about/             # About page
│   └── studio/           # Sanity Studio
├── components/            # Reusable React components
│   ├── ui/               # UI components
│   ├── dashboard/        # Dashboard components
│   ├── dock/             # Dock components
│   └── mdx/              # MDX components
├── lib/                  # Utility functions
├── public/              # Static assets
├── sanity/             # Sanity CMS configuration
├── styles/             # Global and module CSS
├── firebase/           # Firebase configuration
└── hooks/              # Custom React hooks
```

## 🔗 Integrations

### Sanity CMS

Manage content through `/studio` route. Configure CORS settings in Sanity management.

### Firebase

Handles:
- View counting
- User authentication
- Guestbook messages

### Spotify & WakaTime

Real-time tracking of music and coding activities.

### Web3Forms & NodeMailer

Handles contact form submissions and email notifications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push and open a pull request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgements

- Next.js Community
- Sanity.io
- Vercel
- Open-source contributors
