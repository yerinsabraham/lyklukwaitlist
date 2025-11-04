# README_UPDATES — Quick guide for contributors

This file is a concise map and a list of commands for common tasks (setup, local dev, deploy, git push). Keep it in the repository root so collaborators can find quick pointers.

## 1) File map (high-level, diagram-like)

- public/
  - assets/
    - icons/           ← app icon(s) and small UI icons (e.g. `app logo.png` used as favicon)
    - images/          ← large hero and decorative images (compress before push)
- src/
  - components/       ← UI components (Navigation, Footer, WhereCulture, etc.)
  - pages/            ← route pages (Home.jsx, About.jsx, FAQ.jsx)
  - contexts/         ← React contexts (e.g. `WaitlistContext.jsx` for modal state)
  - App.jsx, main.jsx  ← app entry and routing
- functions/          ← Cloud Functions (Firebase) — server API for /api/waitlist
- index.html          ← HTML entry; add favicon links here
- vite.config.js      ← Vite dev server + proxy (for local emulator)
- firebase.json       ← Firebase Hosting & rewrites config
- README_UPDATES.md   ← (this file) quick guide for contributors

## 2) Quick setup (first time)

1. Install dependencies:

```powershell
npm install
```

2. Start Vite for local dev:

```powershell
npm run dev
```

3. If you need to run Firebase Functions locally, install and run the emulators:

```powershell
npm i -g firebase-tools
firebase emulators:start --only functions,hosting
```

4. The dev proxy for `/api/waitlist` is configured in `vite.config.js` to point to the Functions emulator URL used in local testing.

## 3) Build and deploy to Firebase Hosting

1. Build the static site:

```powershell
npm run build
```

2. Deploy hosting (and functions if changed):

```powershell
firebase deploy --only hosting,functions
```

Notes:
- The `firebase.json` includes a rewrite so `/api/waitlist` is routed to the Cloud Function named `waitlist`.
- If you only changed static files, you can deploy hosting only: `firebase deploy --only hosting`.

## 4) Common Git workflows (push & create PR)

1. Create a branch (feature/fix):

```powershell
git checkout -b my-feature
```

2. Stage and commit changes (meaningful commit message):

```powershell
git add .
git commit -m "feat: add social links and favicon"
```

3. Push to your remote (example: `personal` remote used by collaborators):

```powershell
git push personal my-feature
```

4. Open a Pull Request on GitHub from your branch to the main repo.

If your remote is named `waitlist` and points to the upstream repo, use `git fetch waitlist` and create a PR from your branch to `waitlist/main`.

## 5) Useful prompts & checks (copy/paste)

- Re-fetch upstream remote and show differences:

```powershell
git fetch waitlist
git log waitlist/main..HEAD --oneline
```

- Show file size issues (images):

```powershell
Get-ChildItem -Recurse public\assets\images | Sort-Object Length -Descending | Select-Object Name, @{N='KB';E={[math]::round($_.Length/1KB,1)}} | Format-Table -AutoSize
```

- Quick rebuild + deploy (CI-style):

```powershell
npm run build; firebase deploy --only hosting
```

## 6) Notes & best-practices

- Compress large images before committing (Squoosh, TinyPNG, or use `sharp` locally).
- Use descriptive commit messages and small PRs.
- Keep environment secrets out of the repo. Use Firebase project aliases in `.firebaserc`.

----

If you'd like, I can also add a small CONTRIBUTING.md with branching rules and a checklist for PRs.
