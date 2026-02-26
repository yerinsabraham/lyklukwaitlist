import React from 'react'
import termsText from '../../termsofuse.txt?raw'

export default function TermsOfUse() {
  const paragraphs = termsText
    .split(/\r?\n\s*\r?\n/) // split on blank lines
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div className="terms-page" style={{ padding: '2rem' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', background: '#fff', padding: '2rem', borderRadius: 12 }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Terms of Use</h1>
        {paragraphs.map((p, i) => (
          <p key={i} style={{ marginBottom: '0.85rem', color: '#333' }}>
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
