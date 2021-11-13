import React from 'react';
import './style.scss';

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="/"><i className="icon ion-social-instagram" aria-label="Social" /></a>
          <a href="/"><i className="icon ion-social-snapchat" aria-label="Social" /></a>
          <a href="/"><i className="icon ion-social-twitter" aria-label="Social" /></a>
          <a href="/"><i className="icon ion-social-facebook" aria-label="Social" /></a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="/">Home</a></li>
          <li className="list-inline-item"><a href="/">Services</a></li>
          <li className="list-inline-item"><a href="/">About</a></li>
          <li className="list-inline-item"><a href="/">Terms</a></li>
          <li className="list-inline-item"><a href="/">Privacy Policy</a></li>
        </ul>
        <p className="copyright">Company Name © 2018</p>
      </footer>
    </div>
  );
}
