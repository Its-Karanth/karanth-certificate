export default function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="Site navigation">
      <div className="navbar__inner">

        {/* Udemy-style logo */}
        <a href="/" className="navbar__logo" aria-label="Home">
          {/* U with purple checkmark arch */}
          <span className="navbar__logo-text">udemy</span>
          <svg className="navbar__logo-check" viewBox="0 0 20 12" fill="none" aria-hidden="true">
            <path d="M0 4 Q5 0 10 4 Q15 8 20 0" stroke="#a435f0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
        </a>

        <a href="/" className="navbar__link" tabIndex={-1} aria-hidden="true">Explore</a>
        <a href="/" className="navbar__link" tabIndex={-1} aria-hidden="true">Subscribe</a>

        {/* Search */}
        <div className="navbar__search" role="search">
          <span className="navbar__search-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input
            type="search"
            placeholder="Search for anything"
            aria-label="Search for anything"
            readOnly
          />
        </div>

        {/* Right links */}
        <div className="navbar__right">
          <div className="navbar__right-links">
            <a href="https://www.udemy.com/business/" className="navbar__right-link" target="_blank" rel="noopener noreferrer">Udemy Business</a>
            <a href="https://www.udemy.com/teaching/" className="navbar__right-link" target="_blank" rel="noopener noreferrer">Teach on Udemy</a>
            <a href="https://www.udemy.com/home/my-courses/" className="navbar__right-link" target="_blank" rel="noopener noreferrer">My learning</a>
          </div>

          {/* Heart */}
          <button className="navbar__icon-btn" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>

          {/* Cart */}
          <button className="navbar__icon-btn" aria-label="Shopping cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </button>

          {/* Bell */}
          <button className="navbar__icon-btn" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>

          {/* Avatar */}
          <div className="navbar__avatar" role="img" aria-label="User: Karanth Anand">KA</div>
        </div>
      </div>
    </nav>
  )
}
