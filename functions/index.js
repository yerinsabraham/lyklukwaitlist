// Cloud Functions for Firebase (2nd gen) - Waitlist endpoint
const admin = require('firebase-admin');
const { onRequest } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');

// Initialize Admin SDK using default credentials (works on Firebase Hosting/Functions)
admin.initializeApp();

// Use the default Firestore database associated with this project.
const db = admin.firestore();

// Prefer the Compute Default Service Account which already has Editor in your IAM
setGlobalOptions({ region: 'us-central1', serviceAccount: '728695047638-compute@developer.gserviceaccount.com' });

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(String(email || '').trim());
}

exports.waitlist = onRequest(async (req, res) => {
  // CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  if (req.method !== 'POST') {
    res.set('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const email = (req.body && req.body.email) || '';
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email' });
  }

  try {
    await db.collection('waitlist').add({
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
    return res.status(200).json({ ok: true, message: 'Successfully joined waitlist!' });
  } catch (err) {
    console.error('Firestore error:', err);
    return res.status(500).json({ ok: false, error: 'Firestore error: ' + err.message });
  }
});
