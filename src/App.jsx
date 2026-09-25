import { useState } from 'react'
import Header from './components/Header'
import CertificateViewer from './components/CertificateViewer'
import CertificateDetails from './components/CertificateDetails'
import Modal from './components/Modal'

const CERT_URL = 'https://www.udemy.com/certificate/UC-1bb3db0a-9861-42c0-8dcf-44647933caac/'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="page-wrapper">
      <Header />

      <main className="main" id="main-content">
        {/* Two-column grid: certificate (left) + sidebar (right) */}
        <div className="content-grid">
          <CertificateViewer onOpenModal={() => setModalOpen(true)} />
          <CertificateDetails />
        </div>

        {/* ── Verification paragraph below the certificate (Udemy-style) ── */}
        <div className="verify-paragraph">
          <p>
            This certificate above verifies that{' '}
            <a href={CERT_URL} target="_blank" rel="noopener noreferrer">
              Karanth Anand
            </a>{' '}
            successfully completed the course{' '}
            <a href={CERT_URL} target="_blank" rel="noopener noreferrer">
              Learn Data Science &amp; Machine Learning with R from A-Z
            </a>{' '}
            on 09/22/2026 as taught by{' '}
            <a href="https://www.udemy.com/user/juangalvan2/" target="_blank" rel="noopener noreferrer">
              Juan E. Galvan
            </a>
            ,{' '}
            <a href="https://www.udemy.com/user/ismail-tigrek/" target="_blank" rel="noopener noreferrer">
              Ismail Tigrek
            </a>{' '}
            on Udemy. The certificate indicates the entire course was completed as validated
            by the student. The course length represents the total hours of the videos and article
            lectures of the course at the time of most recent completion.
          </p>
        </div>
      </main>

      {modalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  )
}
