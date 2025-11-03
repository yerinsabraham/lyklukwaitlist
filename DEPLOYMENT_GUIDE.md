# Lykluk Waitlist Website — Firebase Deployment Guide

This project is deployed with Firebase Hosting (frontend) and Cloud Functions (backend API). GitHub hosts the code; Firebase serves the site and the waitlist API.

## Prerequisites
- Firebase project: `lykluk-467006`
- Node.js 20+
- Firebase CLI: `npm i -g firebase-tools` and `firebase login`

## Local development

You have two easy options.

### Option A — Vite dev server + Functions emulator
1) Start the Functions emulator:
   - `firebase emulators:start --only functions`
2) In another terminal, run the frontend:
   - `npm run dev`
3) Vite will proxy requests from `/api/waitlist` to the emulator automatically (configured in `vite.config.js`).

### Option B — Full Firebase emulators (Hosting + Functions)
1) Run: `firebase emulators:start --only hosting,functions`
2) Open the Hosting emulator URL shown in the terminal.
   - Hosting will serve the SPA and rewrite `/api/waitlist` to the local function.

Notes
- No environment variables are required for the backend; Cloud Functions uses the project service account automatically.
- If you later add Firebase Web SDK to the client, you can put public keys in `.env` using the `VITE_` prefix (see `.env.example`).

## Deploy
1) Build the app: `npm run build`
2) Deploy to Firebase Hosting (build is auto-run by predeploy):
   - `firebase deploy --only hosting --project lykluk-467006`
3) (If you changed backend code) Deploy functions:
   - `firebase deploy --only functions --project lykluk-467006`

Hosting URL: https://lykluk-467006.web.app/

## Firebase configuration (already committed)
- `firebase.json`
  - Hosting serves `dist/`
  - Rewrites `/api/waitlist` → Cloud Function `waitlist`
  - SPA fallback `**` → `/index.html`
- `functions/index.js`
  - Node.js 20 (2nd Gen) HTTP function `waitlist`
  - Accepts POST `{ email }` → writes to Firestore collection `waitlist`

## Custom domain (optional)
1) In Firebase Console → Hosting → Add custom domain
2) Follow the DNS instructions for your registrar (e.g., Namecheap)
3) Wait for DNS propagation

## Troubleshooting
- Blank page / missing UI:
  - Open DevTools → Console for runtime errors.
  - Hard refresh (Ctrl+F5) or try Incognito to bypass cache.
- API returns error:
  - Check Cloud Functions logs in Firebase Console (Functions → Logs).
  - Ensure Firestore is enabled (native mode) and function is deployed.
- Local dev API not reachable:
  - If using Option A, ensure the Functions emulator is running on 127.0.0.1:5001.
  - If using Option B, open the Hosting emulator URL and use that origin in the browser.

## File structure (relevant)
```
functions/            # Cloud Functions (backend)
  index.js
  package.json
firebase.json         # Hosting + Functions config
src/                  # React (frontend)
dist/                 # Build output (generated)
.env.example          # Optional VITE_ vars for future client SDK use
```

## After deployment
- Verify `/api/waitlist` returns 200 and saves to Firestore.
- Review Firestore data in Console → Firestore → `waitlist` collection.
- Push code to GitHub as usual; deploy with `firebase deploy` when ready.

