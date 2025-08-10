
# GoblinReach – Sales-Ready Static Site

This package is **ready to deploy** to Vercel (or any static hosting). No build step required.

## What’s Included
- `index.html`: Luxury landing page (black/green spy theme) with working **Sign Up / Login** (front-end only) and a **Download Extension** button.
- `dashboard.html`: Auth-protected page (front-end check) with **Automation toggle**, **Campaign Builder**, and links.
- `css/styles.css`, `js/app.js`, `assets/`
- `downloads/goblinreach-extension.zip` (placeholder) — replace with your real extension build when ready.

> Note: Auth is **localStorage-based** for now (no backend). It’s perfect for demo/sales. Hook a backend later for production accounts.

## Your Phone Number
- SMS links and support prompts point to: **+1 845-500-9255**

## How to Deploy on Vercel via GitHub (Zero Coding)
1. Clone your repo locally (e.g., `HitSquad`).
2. Delete all existing files **except** the hidden `.git` folder.
3. Copy everything from this folder into your repo.
4. Commit & push:
   ```bash
   git add .
   git commit -m "GoblinReach Full Upgrade (static)"
   git push
   ```
5. Vercel will auto-deploy. Open your domain (e.g., https://goblinreach.live).

## Direct Upload (No Git)
1. Go to Vercel → **New Project** → **Deploy**.
2. Drag this folder in. Vercel will serve it as a static site.

## Replace the Extension Download
- Swap `downloads/goblinreach-extension.zip` with your real extension package.
- Keep the same filename for the existing links to work.

## Next Steps (Optional)
- Add a backend for real auth, billing, and token seats.
- Wire webhooks for replies → Google Sheets/Telegram.
- Add proxy/rotation configuration inputs and per-seat limits.
