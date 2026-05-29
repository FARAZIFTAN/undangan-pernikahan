# undangan-pernikahan

## Development

- Install: `npm install`
- Run dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

## Deploy (Netlify)

Repo ini sudah termasuk konfigurasi Netlify lewat `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect: `/* -> /index.html (200)`

### Environment variables

Fitur RSVP memakai Supabase. Jika env belum diset, website tetap jalan, tapi RSVP akan non-aktif.

Tambahkan env berikut di Netlify (Site settings → Environment variables):

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`