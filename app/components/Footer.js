export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content-rezide">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">Z</div>
              <span>REZIDE</span>
            </div>
            <p className="footer-description">
              The only place for you to <br />
              browse 100% trusted and <br />
              authentic properties
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-heading">Explore</h4>
            <ul className="footer-links-list">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-heading">About Us</h4>
            <ul className="footer-links-list">
              <li><a href="#careers">Careers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#help-centre">Help Centre</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-heading">Support</h4>
            <ul className="footer-links-list">
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms-of-use">Terms Of Use</a></li>
              <li><a href="#cookies-policy">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
