import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <a href="/" className="logo-link">
          <svg className="logo-icon" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <span className="copyright">© 2023 Carolina Viggiano</span>
      </div>

      <ul className="social-links">
        <li>
          <a href="https://twitter.com/caro_viggiano" className="social-link">
            <h3>Twitter</h3>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_albacrochet/?hl=es-la" className="social-link">
            <h3>Instagram</h3>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
