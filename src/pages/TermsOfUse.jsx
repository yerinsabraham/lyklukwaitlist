import React from 'react'
import termsHtml from '../../termsofuse.html?raw'

export default function TermsOfUse() {
  return <div className="terms-page" dangerouslySetInnerHTML={{ __html: termsHtml }} />
}
