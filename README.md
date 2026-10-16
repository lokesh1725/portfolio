# Lokeshwaran K — Developer Portfolio

A modern, minimal, recruiter-friendly personal portfolio built with **React + Vite + Tailwind
CSS v4** and **Lucide** icons.

> Building useful applications with clean code and practical engineering.

## Highlights

- Light, minimal design with dark typography and subtle blue accents.
- Sticky top navigation with scroll-spy active states and a mobile menu.
- Hero, About, Technical Skills, Projects, Experience, Education & Achievements, and Contact
  sections.
- Accessible semantic HTML, keyboard-focus styles, and reduced-motion support.
- SEO title/metadata and Open Graph tags.
- Fast, static, no backend required.

## Tech stack

| Area       | Choice                          |
| ---------- | ------------------------------- |
| Framework  | React 19                        |
| Build tool | Vite 8                          |
| Styling    | Tailwind CSS v4                 |
| Icons      | lucide-react                    |
| Language   | JavaScript (JSX)                |

## Getting started

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

### Production build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
portfolio/
├─ index.html                 # SEO metadata, fonts, app mount point
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ resume/
│     └─ Lokeshwaran_K_Resume.pdf   # placeholder — replace with your final resume
├─ src/
│  ├─ main.jsx                # React entry point
│  ├─ App.jsx                 # Page composition
│  ├─ index.css               # Tailwind + theme + reduced-motion styles
│  ├─ data/                   # Content lives here (edit these, not the UI)
│  │  ├─ profile.js           # Name, role, contacts, about text, nav links
│  │  ├─ skills.js            # Skill groups
│  │  ├─ projects.js          # Projects
│  │  ├─ experience.js        # Work experience
│  │  ├─ education.js         # Education + achievements
│  │  └─ certifications.js    # Certifications + additional info
│  ├─ hooks/
│  │  └─ useScrollSpy.js
│  └─ components/
│     ├─ layout/  (Navbar, Footer)
│     ├─ sections/ (Hero, About, Skills, Projects,
│     │             Experience, Education, Contact)
│     └─ ui/      (Section, Reveal, Badge, Button)
└─ .env.example               # Optional contact-form endpoint
```

## Editing content

All copy is separated from the UI. Update the files in `src/data/`:

- **Personal details / links** → `src/data/profile.js`
- **Skills** → `src/data/skills.js`
- **Projects** → `src/data/projects.js`
- **Experience** → `src/data/experience.js`
- **Education / achievements** → `src/data/education.js`
- **Certifications** → `src/data/certifications.js`

### Replace the resume

Drop your final PDF at `public/resume/Lokeshwaran_K_Resume.pdf` (same file name). Every
**Download Resume** button links to `/resume/Lokeshwaran_K_Resume.pdf`. To use a different name,
update `resumeUrl` in `src/data/profile.js`.

### Contact form

By default the form validates input and opens the visitor's email client (a real, working
action). No fake "message sent" state is shown.

To POST submissions to a real service, copy `.env.example` to `.env` and set an endpoint:

```bash
VITE_CONTACT_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

When configured, the form POSTs JSON and shows genuine success/error states.

## Deploy to Vercel

1. Push this project to a GitHub repository.
   ```bash
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/lokesh1725/<repo-name>.git
   git push -u origin main
   ```
2. Go to <https://vercel.com> and sign in with GitHub.
3. Click **Add New… → Project**, then **Import** the repository.
4. Vercel auto-detects Vite. Confirm the settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. (Optional) Add an environment variable `VITE_CONTACT_ENDPOINT` under **Settings → Environment
   Variables** if you want the contact form to post to a service.
6. Click **Deploy**. Vercel builds and gives you a live URL such as
   `https://your-project.vercel.app`.

Every push to `main` triggers an automatic redeploy. You can also deploy from the CLI:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

### Custom domain & HTTPS

1. In your Vercel project, open **Settings → Domains** and add your domain
   (e.g. `lokeshwaran.dev`).
2. At your DNS provider, add the records Vercel shows:
   - Apex/root domain → `A` record to `76.76.21.21`
   - `www` → `CNAME` to `cname.vercel-dns.com`
3. Vercel automatically issues and renews a **free HTTPS certificate (Let's Encrypt)** once DNS
   resolves. No manual certificate steps are needed.
4. Update the `canonical` and `og:url` values in `index.html` to your real domain.

## Notes

- The site contains no fabricated metrics, proficiency percentages, or business results.
- The resume PDF, profile photo, and canonical URL are the only placeholders to fill in before
  going public.
