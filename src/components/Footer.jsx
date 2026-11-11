
function Footer() {
  return (
    <footer className="footer" id="support">

      <div className="footer-container">

        <div className="footer-about">
          <h2>ZERODHA</h2>
          <p>
            A simple and responsive stockbroker
            website clone built using React and CSS.
          </p>
          <p>© 2026 Zerodha Clone Project</p>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#signup">Home</a>
        </div>

        <div className="footer-links">
          <h3>Resources</h3>
          <a href="https://zerodha.com/varsity/" target="_blank" rel="noreferrer">
            Varsity
          </a>
          <a href="https://support.zerodha.com/" target="_blank" rel="noreferrer">
            Support
          </a>
          <a href="https://zerodha.com/charges/" target="_blank" rel="noreferrer">
            Charges
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          Educational frontend demonstration only.
          Not an official Zerodha website.
          No real trading or investment services are provided.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
