export default function CertificateViewer({ onOpenModal }) {
  return (
    <div className="cert-area" onClick={onOpenModal} title="Click to view full size" style={{ cursor: 'zoom-in' }}>
      <img
        id="certificate-image"
        src="/certificate.jpg"
        alt="Certificate of Completion – Learn Data Science &amp; Machine Learning with R from A-Z, awarded to Karanth Anand, September 22, 2026"
      />
    </div>
  )
}
