# Lykluk Web Architecture & Migration Plan

## 1. Objective

This document describes the plan to restructure **lykluk.com** into a multi‑subdomain setup using Firebase Hosting, while preparing the main domain for a future full WebApp.

The goals are:

* Move the existing landing page to **about.lykluk.com**
* Turn **lykluk.com** into a well‑designed "Web App Coming Soon" experience
* Keep **blog.lykluk.com** as a separate, independently deployable site. Build a proffessional blog page keeping to same them, logo of lykluk.. but so much more clean and proffessional. create a blog posts.
* Prepare a clean folder and deployment structure that allows easy replacement of the Coming Soon page with the real WebApp later

This approach avoids downtime, keeps SEO intact, and clearly communicates product direction to users.

---

## 2. Final Domain Responsibilities

### lykluk.com (Main Domain)

**Purpose:** Web App entry point (temporary Coming Soon)

Current state:

* Hosts a professional "Web App Coming Soon" page
* Displays brand identity, logo, header, and navigation shell
* Clearly communicates that a full web version of the mobile app is in development

Content expectations:

* "Web App Coming Soon" headline
* Short product value proposition
* Visual hints of the future app (mock UI, cards, dashboard preview)
* Calls to action:

  * Visit About page
  * Read the Blog

This page is intentionally lightweight and easy to replace later.

---

### about.lykluk.com

**Purpose:** Official product and company website

This will be a migrated and refined version of the current landing page.

Content expectations:

* Platform overview
* Mission and vision
* Product explanation
* Team or brand story
* Links to Web App (lykluk.com) and Blog

This page should feel authoritative and informational.

---

### blog.lykluk.com

**Purpose:** Content and updates

* Product updates
* Announcements
* Thought leadership
* Future marketing content

Completely independent from the WebApp release cycle.
 Build a proffessional blog page keeping to same them, logo of lykluk.. but so much more clean and proffessional. create a blog posts

---

## 3. Migration Strategy (High Level)

### Phase 1: Preserve and Duplicate

* Take the current landing page codebase
* Duplicate it logically for the About site
* Deploy unchanged version to **about.lykluk.com** first

This ensures nothing is lost.

### Phase 2: Refine About Page

* Update page title and metadata
* Reframe content as the **official website**
* Clean up copy and structure
* Adjust navigation to reflect new domain layout

### Phase 3: Replace Main Domain Content

* Strip the landing page logic from the main site
* Replace with a "Web App Coming Soon" experience
* Keep branding and navigation consistent

---

## 4. Suggested Repository & Folder Structure

This structure assumes **one repo** managing multiple Firebase Hosting sites.

```
/lykluk-web
│
├── apps/
│   ├── webapp-placeholder/
│   │   ├── src/
│   │   ├── assets/
│   │   ├── index.html
│   │   └── README.md
│   │
│   ├── about-site/
│   │   ├── src/
│   │   ├── assets/
│   │   ├── index.html
│   │   └── README.md
│   │
│   └── blog-site/
│       ├── src/
│       ├── assets/
│       ├── index.html
│       └── README.md
│
├── firebase.json
├── .firebaserc
└── README.md
```

Each folder maps to a Firebase Hosting site.

---

## 5. Firebase Hosting Mapping

| Firebase Site ID | Folder                  | Domain           |
| ---------------- | ----------------------- | ---------------- |
| default          | apps/webapp-placeholder | lykluk.com       |
| lykluk-about     | apps/about-site         | about.lykluk.com |
| lykluk-blog      | apps/blog-site          | blog.lykluk.com  |

This makes deployment explicit and predictable.

---

## 6. Web App Coming Soon – UI/UX Direction

This page should **feel like a paused app, not a dead site**.

Guidelines for Copilot / AI assistance:

* Design as a future‑ready dashboard shell
* Include:

  * App header
  * Sidebar or nav preview (disabled)
  * Cards or sections marked "Coming Soon"
* Use subtle motion or loading‑state metaphors
* Avoid generic "under construction" aesthetics

Messaging tone:

* Confident
* Intentional
* Product‑led

---

## 7. Future Transition to Full Web App

When the WebApp is ready:

* Replace `apps/webapp-placeholder` with the real app
* Keep domain and Firebase site unchanged
* No DNS changes required
* No SEO reset

This makes the launch a **deployment**, not a migration.

---

## 8. Why This Approach Works

* Zero downtime
* Clear separation of concerns
* Scales with product growth
* Friendly to CI/CD
* Easy mental model for future contributors

---

## 9. Open Decisions (Optional Clarifications)

These can be decided later:

* Single repo vs multiple repos
* Framework choices for WebApp (React, Next.js, etc.)
* Blog CMS strategy

None of these block the current plan.

---

## 10. Conclusion

This setup intentionally treats **lykluk.com as a product surface**, not just a website.

It communicates momentum, protects future launches, and keeps everything technically clean.

This document should be used as the guiding reference while implementing changes with GitHub Copilot or other AI tools.
