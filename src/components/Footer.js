import "./Footer.css";
import React from 'react';

function Footer() {
  return (
    <footer id='main-footer'>
      <ul id='footer-links'>
        <li><a href='https://github.com/rolinmb'>Rolin Blake on GitHub</a></li>
        <li><a href='https://www.linkedin.com/in/rolin-blake/'>Rolin Blake on LinkedIn</a></li>
      </ul>
      <p>&copy; Rolin Blake 2024 | Hosted with Google Firebase | <a href='https://github.com/rolinmb/rmb-portfolio-react'>This GitHub Repo</a> | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;