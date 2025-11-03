# Lykluk Waitlist Website - Deployment Guide

## Overview
This guide will help you deploy your Lykluk waitlist website with:
- **GitHub**: Version control and repository hosting
- **Vercel**: Website hosting and deployment
- **Firebase Firestore**: Email storage for waitlist

---

## Prerequisites Checklist
- [x] Firebase Project created: `lykluk-467006`
- [x] Vercel account created
- [x] GitHub repository created: `lyklukwaitlist`
- [x] Firebase and Firebase Admin SDK installed
- [x] Code updated to save emails to Firebase

---

## Step 1: Get Firebase Credentials

### 1.1 Get Firebase Service Account Key
1. Go to Firebase Console: https://console.firebase.google.com/project/lykluk-467006
2. Click the **gear icon** (⚙️) next to "Project Overview" → **Project Settings**
3. Go to the **"Service Accounts"** tab
4. Click **"Generate New Private Key"** button
5. Click **"Generate Key"** - this downloads a JSON file
6. **KEEP THIS FILE SECURE!** It contains your private credentials

### 1.2 Get Firebase Web App Config (Optional - only if using client-side Firebase)
1. In Firebase Console → Project Settings
2. Scroll down to **"Your apps"** section
3. If you don't have a web app, click **"Add app"** → Select **Web** (</>) icon
4. Register app with a nickname (e.g., "Lykluk Waitlist")
5. Copy the `firebaseConfig` object values

---

## Step 2: Set Up Vercel Environment Variables

You need to add Firebase credentials to Vercel so your serverless function can save emails.

### 2.1 From the Service Account JSON file you downloaded:
Open the JSON file and find these values:
- `project_id` → Use for **FIREBASE_PROJECT_ID**
- `client_email` → Use for **FIREBASE_CLIENT_EMAIL**
- `private_key` → Use for **FIREBASE_PRIVATE_KEY**

### 2.2 Add to Vercel Dashboard:
1. Go to: https://vercel.com/lykluks-projects
2. Once you connect your GitHub repo (next step), go to your project
3. Click **"Settings"** → **"Environment Variables"**
4. Add these three variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `FIREBASE_PROJECT_ID` | lykluk-467006 | Production, Preview, Development |
| `FIREBASE_CLIENT_EMAIL` | (from JSON file) | Production, Preview, Development |
| `FIREBASE_PRIVATE_KEY` | (from JSON file) | Production, Preview, Development |

**Important for FIREBASE_PRIVATE_KEY:**
- Include the entire key with `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- Keep the `\n` characters in the key
- Wrap it in quotes

---

## Step 3: Enable Firestore in Firebase

1. Go to Firebase Console: https://console.firebase.google.com/project/lykluk-467006
2. Click **"Firestore Database"** in the left menu
3. Click **"Create Database"**
4. Choose **"Start in production mode"** (or test mode if you prefer)
5. Select a location (choose closest to your users)
6. Click **"Enable"**

Your `waitlist` collection will be created automatically when the first email is submitted.

---

## Step 4: Push Code to GitHub

### 4.1 Initialize Git (if not already done)
```powershell
cd "c:\Users\PC\Lykluk landing Page"
git init
```

### 4.2 Add Remote Repository
```powershell
git remote add origin https://github.com/Lykluk-main/lyklukwaitlist.git
```

### 4.3 Stage and Commit Files
```powershell
git add .
git commit -m "Initial commit with Firebase integration"
```

### 4.4 Push to GitHub
```powershell
git branch -M main
git push -u origin main
```

---

## Step 5: Connect GitHub to Vercel and Deploy

### 5.1 Import Project to Vercel
1. Go to: https://vercel.com/lykluks-projects
2. Click **"Add New..."** → **"Project"**
3. Click **"Import"** next to your GitHub repository: `Lykluk-main/lyklukwaitlist`
4. If you don't see it, click **"Adjust GitHub App Permissions"** and grant access

### 5.2 Configure Project
1. **Framework Preset**: Vite
2. **Root Directory**: ./
3. **Build Command**: `npm run build` (should auto-detect)
4. **Output Directory**: `dist` (should auto-detect)
5. **Install Command**: `npm install` (should auto-detect)

### 5.3 Add Environment Variables
Before clicking Deploy, expand **"Environment Variables"** and add:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

(Use the values from Step 2)

### 5.4 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a live URL like: `https://lyklukwaitlist.vercel.app`

---

## Step 6: Test Your Waitlist

1. Visit your deployed website
2. Enter an email in the waitlist form
3. Click submit
4. Check Firebase Console → Firestore Database → `waitlist` collection
5. You should see the email saved with a timestamp!

---

## Step 7: Set Up Custom Domain (Optional)

1. In Vercel Dashboard → Your Project → **"Settings"** → **"Domains"**
2. Click **"Add"**
3. Enter your custom domain (e.g., `waitlist.lykluk.com`)
4. Follow Vercel's instructions to add DNS records to your domain provider
5. Wait for DNS propagation (can take up to 48 hours)

---

## Troubleshooting

### Problem: "Firebase not configured" error
**Solution**: Make sure environment variables are set in Vercel Dashboard and redeploy

### Problem: Emails not saving
**Solution**: 
1. Check Vercel Function Logs: Project → Deployments → Click deployment → Functions tab
2. Verify Firebase credentials are correct
3. Ensure Firestore is enabled in Firebase Console

### Problem: Build fails on Vercel
**Solution**: Check that `package.json` has the correct build script and dependencies

---

## File Structure Overview

```
/api
  └── waitlist.js              # Serverless function that saves emails
  └── firebase-admin.js        # Firebase Admin initialization

/src
  └── firebase.js              # Firebase client config (optional)
  
.env.example                   # Template for environment variables
.gitignore                     # Ignore .env files
vercel.json                    # Vercel configuration
```

---

## Next Steps After Deployment

1. **View Waitlist Emails**: Go to Firebase Console → Firestore → `waitlist` collection
2. **Export Emails**: Use Firebase Console to export to CSV or integrate with email tools
3. **Monitor**: Check Vercel Analytics for traffic and function execution
4. **Update**: Push changes to GitHub → Vercel auto-deploys

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Firebase Docs: https://firebase.google.com/docs/firestore
- GitHub Docs: https://docs.github.com

