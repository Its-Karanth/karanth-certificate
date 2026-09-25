const CERT_URL = 'https://www.udemy.com/certificate/UC-1bb3db0a-9861-42c0-8dcf-44647933caac/'

export default function Sidebar() {
  const handleDownload = () => {
    const a = document.createElement('a')
    a.href = '/certificate.jpg'
    a.download = 'Karanth_Anand_Certificate.jpg'
    a.click()
  }

  return (
    <aside className="sidebar">

      {/* ── Certificate Recipient ── */}
      <div className="sidebar__section">
        <p className="sidebar__heading">Certificate Recipient:</p>
        <div className="recipient-row">
          <div className="recipient-avatar" aria-hidden="true">
            {/* Person icon */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
          <span className="recipient-name">Karanth Anand</span>
        </div>
      </div>

      {/* ── About the Course ── */}
      <div className="sidebar__section">
        <p className="sidebar__heading">About the Course:</p>

        {/* Thumbnail */}
        <div className="course-thumb-wrap">
          <img
            src="/course-thumb.jpg"
            alt="Learn Data Science and Machine Learning with R from A-Z course thumbnail"
          />
        </div>

        {/* Title */}
        <p className="course-title">
          Learn Data Science &amp; Machine Learning with R from A-Z
        </p>

        {/* Instructors */}
        <p className="course-instructors">Juan E. Galvan, Ismail Tigrek</p>

        {/* Rating row */}
        <div className="course-rating-row">
          <span className="rating-number">4.6</span>
          <span className="stars" aria-label="4.6 out of 5 stars">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ opacity: i < 4 ? 1 : 0.35 }}>{s}</span>
            ))}
          </span>
          <span className="rating-count">(1,435)</span>
        </div>

        {/* Meta */}
        <p className="course-meta">28.5 total hours &bull; 80 lectures</p>

        {/* Price */}
        <div className="course-price-row">
          <span className="price-current">₹479.00</span>
          <span className="price-original">₹3,159.00</span>
        </div>

        {/* Download button */}
        <button
          id="download-cert-btn"
          className="btn-download"
          onClick={handleDownload}
          aria-label="Download your certificate"
        >
          {/* Download icon matching Udemy style */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </button>

        {/* Verify link below button */}
        <p style={{ marginTop: '12px', fontSize: '0.75rem', color: '#6a6f73', textAlign: 'center' }}>
          <a
            href={CERT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#5624d0', textDecoration: 'underline' }}
            id="sidebar-verify-link"
          >
            Verify this certificate on Udemy ↗
          </a>
        </p>
      </div>
    </aside>
  )
}
