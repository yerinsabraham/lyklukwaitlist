import React, { createContext, useContext, useState, useCallback } from 'react'
import WaitlistModal from '../components/WaitlistModal'

const WaitlistContext = createContext(null)

export function WaitlistProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [initialEmail, setInitialEmail] = useState('')

  const open = useCallback((email = '') => {
    setInitialEmail(email || '')
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setInitialEmail('')
  }, [])

  return (
    <WaitlistContext.Provider value={{ open, close }}>
      {children}
      <WaitlistModal open={isOpen} onClose={close} initialEmail={initialEmail} />
    </WaitlistContext.Provider>
  )
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext)
  if (!ctx) throw new Error('useWaitlist must be used within WaitlistProvider')
  return ctx
}

export default WaitlistContext
