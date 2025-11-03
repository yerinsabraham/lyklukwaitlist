// Vercel Serverless Function: /api/waitlist
// Accepts POST { email } and saves it to Firebase Firestore

import { adminDb } from './firebase-admin.js';

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(String(email || '').trim())
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' })
  }

  const email = (req.body && req.body.email) || ''
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email' })
  }

  try {
    // Save email to Firebase Firestore
    await adminDb.collection('waitlist').add({
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      createdAt: new Date()
    });

    console.log('Waitlist signup saved to Firebase:', email);
    return res.status(200).json({ ok: true, message: 'Successfully joined waitlist!' })
  } catch (err) {
    console.error('Firebase error:', err);
    return res.status(500).json({ ok: false, error: 'Failed to save email. Please try again.' })
  }
}
