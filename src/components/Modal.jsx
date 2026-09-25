import { useEffect, useCallback } from 'react'

export default function Modal({ onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div
      id="certificate-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Full certificate view"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.18s ease-out',
      }}
    >
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
      <div style={{ position: 'relative', maxWidth: '95vw', maxHeight: '90vh' }}>
        <button
          id="modal-close-btn"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: '-16px', right: '-16px',
            width: '36px', height: '36px', borderRadius: '50%',
            background: '#fff', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.25)', zIndex: 10,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1c1d1f" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <img
          id="modal-certificate-image"
          src="/certificate.jpg"
          alt="Full certificate view"
          style={{
            display: 'block', maxWidth: '100%', maxHeight: '87vh',
            width: 'auto', height: 'auto', objectFit: 'contain',
            borderRadius: '4px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
        />
      </div>
    </div>
  )
}
