export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">Z</div>
            <span className="logo-text">REZIDE</span>
          </div>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#network">My Network</a></li>
              <li><a href="#jobs">Jobs</a></li>
              <li><a href="#messaging">Messaging</a></li>
              <li><a href="#notifications">Notifications</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
