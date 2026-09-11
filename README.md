# Sarmad Shafiq — Portfolio

A modern, interactive portfolio website built with React, Three.js, GSAP, and Tailwind CSS, matching the DevHQ design aesthetic.

## 🚀 Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool & dev server
- **Three.js** — 3D particle system in hero section
- **GSAP + ScrollTrigger** — Scroll-based reveal animations
- **Tailwind CSS 4** — Styling with custom theme
- **Lenis** — Smooth scroll
- **Vercel** — Deployment platform
- **Resend API** — Contact form email handling

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/SarmadShafiq123/Sarmad-Portfolio.git
cd sarmad-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173`

## 🌐 Deployment (Vercel)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio build"
git branch -M main
git remote add origin https://github.com/SarmadShafiq123/Sarmad-Portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect the Vite framework
5. Add environment variables in **Settings → Environment Variables**:
   - `RESEND_API_KEY` — Get from [resend.com/api-keys](https://resend.com/api-keys)
   - `CONTACT_EMAIL` — Your email to receive contact form submissions
6. Click **Deploy**

### Step 3: Configure Resend

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use the default `onboarding@resend.dev` sender
3. Generate an API key
4. Add the key to Vercel environment variables

## 🎨 Customization

### Update Personal Data

Edit `src/data/index.js` to update:
- Navigation links
- Projects (title, description, links)
- Skills & categories
- Experience entries
- Social profile links

### Change Color Palette

Edit the `@theme` section in `src/index.css`:

```css
@theme {
  --color-bg-primary:    #0A0F1E;  /* Main background */
  --color-accent:        #00D9C0;  /* Teal accent */
  /* ... other colors ... */
}
```

### Adjust Typography

Update font imports and variables in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

@theme {
  --font-display: 'Your Font', sans-serif;
  /* ... */
}
```

## 📂 Project Structure

```
sarmad-portfolio/
├── api/
│   └── contact.js           # Vercel serverless function for contact form
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/        # Hero, About, Projects, Skills, etc.
│   │   └── ui/              # Navbar, Footer
│   ├── data/
│   │   └── index.js         # Site content data
│   ├── hooks/
│   │   └── useLenis.js      # Smooth scroll hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Global styles + Tailwind theme
├── .env.example
├── vercel.json
├── package.json
└── vite.config.js
```

## 🛠️ Available Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run oxlint
```

## 📝 Environment Variables

Create a `.env` file in the root (never commit this):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=your-email@example.com
```

See `.env.example` for reference.

## 🎯 Features

- ✅ Interactive Three.js particle background with mouse parallax
- ✅ Smooth scroll with Lenis
- ✅ GSAP ScrollTrigger animations on all sections
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Filter tabs on Skills section (Languages / Web / Desktop / Databases / Tools)
- ✅ Working contact form with serverless backend
- ✅ Navbar with active section tracking
- ✅ Dark theme with Cyber Teal accent palette
- ✅ Resume PDF viewer integration
- ✅ GitHub repository link on portfolio project card
- ✅ Optimized for Lighthouse performance

## 📋 Project Highlights

**MC Carrier Extractor** — Lead desktop application project showcasing Electron.js expertise with worker-pool concurrency, FMCSA data scraping, and Windows .exe packaging.

**4 Live Projects** — E-commerce platform, encrypted cloud storage (FYP), and this portfolio itself with Three.js + GSAP.

## 📄 License

All rights reserved © 2026 Sarmad Shafiq

## 🤝 Contact

- **Email:** sarmad@example.com (update this)
- **LinkedIn:** [linkedin.com/in/sarmad-shafiq](https://linkedin.com/in/sarmad-shafiq) (update with your URL)
- **GitHub:** [github.com/SarmadShafiq123](https://github.com/SarmadShafiq123)

---

Built with passion 🚀 using React, Three.js, and modern web technologies.
