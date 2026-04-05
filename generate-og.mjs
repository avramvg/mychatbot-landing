import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'

// SVG OG image 1200x630
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#1e3a5f"/>
    </linearGradient>
    <!-- Cercuri decorative fundal -->
    <radialGradient id="glow1" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#3B9EE0;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#3B9EE0;stop-opacity:0"/>
    </radialGradient>
  </defs>

  <!-- Fundal gradient -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Glow decorativ stânga -->
  <circle cx="200" cy="200" r="300" fill="url(#glow1)"/>
  <!-- Glow decorativ dreapta -->
  <circle cx="1000" cy="430" r="250" fill="url(#glow1)"/>

  <!-- Linie decorativă sus -->
  <rect x="0" y="0" width="1200" height="3" fill="#F5A623" opacity="0.8"/>

  <!-- LOGO centrat — "my" text-anchor end, "CHATBOT" text-anchor start, gap fix 24px -->
  <!-- "my" italic bold portocaliu -->
  <text x="558" y="234"
    font-family="Georgia, serif" font-style="italic" font-weight="bold"
    font-size="96" fill="#F5A623" text-anchor="end" letter-spacing="-2">my</text>

  <!-- "CHATBOT" bold alb -->
  <text x="582" y="230"
    font-family="Arial Black, sans-serif" font-weight="900"
    font-size="86" fill="#FFFFFF" text-anchor="start" letter-spacing="8">CHATBOT</text>

  <!-- Linie separator sub logo -->
  <rect x="320" y="258" width="560" height="2" fill="#F5A623" opacity="0.4" rx="1"/>

  <!-- Tagline principal -->
  <text x="600" y="330"
    font-family="Arial, sans-serif" font-weight="600"
    font-size="38" fill="#FFFFFF" text-anchor="middle" opacity="0.95">
    Chatbot AI pentru turism și HoReCa
  </text>

  <!-- Sub-tagline -->
  <text x="600" y="390"
    font-family="Arial, sans-serif" font-weight="400"
    font-size="26" fill="#FFFFFF" text-anchor="middle" opacity="0.6">
    Răspunde 24/7 · Verifică disponibilitatea · Preia rezervări
  </text>

  <!-- Badge "7 zile gratuit" -->
  <rect x="450" y="440" width="300" height="52" rx="26" fill="#F5A623" fill-opacity="0.15" stroke="#F5A623" stroke-width="1.5" stroke-opacity="0.5"/>
  <text x="600" y="472"
    font-family="Arial, sans-serif" font-weight="700"
    font-size="22" fill="#F5A623" text-anchor="middle">
    7 zile gratuit · fără card
  </text>

  <!-- Bottom right: domeniu -->
  <text x="1140" y="600"
    font-family="Arial, sans-serif" font-weight="400"
    font-size="20" fill="#FFFFFF" text-anchor="end" opacity="0.4">
    mychatbot.ro
  </text>

  <!-- Dots decorative dreapta jos -->
  <circle cx="1080" cy="540" r="4" fill="#3B9EE0" opacity="0.3"/>
  <circle cx="1100" cy="540" r="4" fill="#3B9EE0" opacity="0.2"/>
  <circle cx="1120" cy="540" r="4" fill="#3B9EE0" opacity="0.1"/>
</svg>`

// Convertim SVG → PNG cu sharp
const pngBuffer = await sharp(Buffer.from(svg))
  .png()
  .toBuffer()

writeFileSync('public/og-image.png', pngBuffer)
console.log('og-image.png generat: ' + pngBuffer.length + ' bytes')
