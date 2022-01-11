import React from "react";
import "../Styles/Styles.scss";

function Footer() {
  return (
    <footer id="footer-new" className="container">
      <div className="container">
        <h3>Pridružite se nam na družbenih omrežjih</h3>
        <p>Sveže novice, akcije in ponudbe.</p>
        <div id="social">
          <a href="https://www.facebook.com/TelekomSlovenije">
            <img
              src="https://www.telekom.si/_catalogs/masterpage/ts/img/ico/social/facebook.svg"
              alt="Facebook link"
              className="ikone"
            />
          </a>
          <a href="https://twitter.com/TelekomSlo">
            <img
              src="https://www.telekom.si/_catalogs/masterpage/ts/img/ico/social/twitter.svg"
              alt="Twitter link"
              className="ikone"
            />
          </a>
          <a href="https://www.instagram.com/telekom_slovenije/">
            <img
              src="https://www.telekom.si/_catalogs/masterpage/ts/img/ico/social/instagram.svg"
              alt="Instagram link"
              className="ikone"
            />
          </a>
          <a href="https://www.youtube.com/user/TelekomSlovenije">
            <img
              src="https://www.telekom.si/_catalogs/masterpage/ts/img/ico/social/youtube.svg"
              alt="Youtube link"
              className="ikone"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
