import React from 'react'
import privacyHtml from '../../privacy.html?raw'

export default function Privacy() {
  return <div className="privacy-page" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
}
