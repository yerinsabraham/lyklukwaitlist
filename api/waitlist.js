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
    // Log environment variables for debugging (without exposing full secrets)
    console.log('Debug: Checking Firebase config...');
    console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID ? 'Set ✓' : 'MISSING ✗');
    console.log('FIREBASE_CLIENT_EMAIL:', process.env.FIREBASE_CLIENT_EMAIL ? 'Set ✓' : 'MISSING ✗');
    console.log('FIREBASE_PRIVATE_KEY:', process.env.FIREBASE_PRIVATE_KEY ? 'Set ✓' : 'MISSING ✗');

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
    console.error('Error details:', {
      name: err.name,
      message: err.message,
      code: err.code,
      stack: err.stack
    });
    
    // Return more detailed error message
    return res.status(500).json({ 
      ok: false, 
      error: `Firebase error: ${err.message}`,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    })
  }
}
