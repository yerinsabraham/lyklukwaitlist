const { adminDb } = require('./firebase-admin.js');

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(String(email || "").trim());
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const email = (req.body && req.body.email) || "";
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email" });
  }

  try {
    console.log("Saving email to Firebase:", email);
    
    await adminDb.collection("waitlist").add({
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      createdAt: new Date()
    });

    console.log("Successfully saved to Firebase");
    return res.status(200).json({ ok: true, message: "Successfully joined waitlist!" });
  } catch (err) {
    console.error("Firebase error:", err);
    return res.status(500).json({ 
      ok: false, 
      error: `Firebase error: ${err.message}`
    });
  }
};
