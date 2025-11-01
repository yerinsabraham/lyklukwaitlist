// Vercel Serverless Function: /api/waitlist
// Accepts POST { email } and (in dev) appends to ./.data/waitlist.json
// In production on Vercel, this simply validates and returns success (storage is ephemeral).

import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(String(email || '').trim())
}

function appendEmailLocally(email) {
  const dir = resolve(process.cwd(), '.data')
  const file = resolve(dir, 'waitlist.json')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  let list = []
  if (existsSync(file)) {
    try { list = JSON.parse(readFileSync(file, 'utf8') || '[]') } catch { list = [] }
  }
  list.push({ email, ts: new Date().toISOString() })
  writeFileSync(file, JSON.stringify(list, null, 2), 'utf8')
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

  // In local dev, persist to a file so you can verify submissions
  const isDev = process.env.NODE_ENV !== 'production' && !process.env.VERCEL
  try {
    if (isDev) {
      appendEmailLocally(email)
    } else {
      // In production on Vercel, disk writes are ephemeral. Integrate a DB/Airtable/Sheets here.
      // For now we just log.
      console.log('Waitlist signup:', email)
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('waitlist error', err)
    return res.status(500).json({ ok: false, error: 'Server error' })
  }
}
