# MyChatbot Landing Page

Landing page pentru [www.mychatbot.ro](https://www.mychatbot.ro) — Chatbot AI pentru turism și HoReCa.

**Stack:** Astro 4 · Sveltia CMS · Cloudflare Pages

---

## Dezvoltare locală

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build producție în dist/
npm run preview    # preview build local
```

---

## Deploy Cloudflare Pages

1. Conectează repo `avramvg/mychatbot-landing` în [Cloudflare Pages](https://pages.cloudflare.com/)
2. **Build command:** `npm run build`
3. **Output directory:** `dist`
4. **Node version:** `18` (setează în Environment Variables: `NODE_VERSION=18`)
5. **Custom domain:** `www.mychatbot.ro`
   - Adaugă în Cloudflare Pages → Custom domains → `www.mychatbot.ro`
   - Adaugă DNS CNAME: `www` → `<project>.pages.dev`

---

## CMS (Sveltia)

URL: `https://www.mychatbot.ro/admin/`

- Autentificare prin GitHub OAuth (PKCE)
- Editezi FAQ-urile și setările din browser, fără cod
- Commit automat pe branch `main` → deploy automat

---

## Configurare widget demo

1. Creează un client demo în [admin.mychatbot.ro](https://app.mychatbot.ro)
2. Copiază `client_id`-ul
3. Editează `src/components/DemoSection.astro` → înlocuiește `CLIENT_ID_DEMO`

---

## Structură

```
src/
├── pages/          index.astro, termeni.astro, confidentialitate.astro
├── components/     Nav, Hero, VideoSection, KnowledgeSources, Features,
│                   HowItWorks, DemoSection, Pricing, FAQ, CTAFinal, Footer
├── layouts/        Layout.astro (meta SEO, fonts)
└── styles/         global.css
public/
├── logos/          mychatbot-logo.svg, mychatbot-logo-white.svg, mychatbot-icon.svg
└── admin/          index.html (Sveltia CMS), config.yml
```
