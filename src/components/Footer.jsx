import React from "react";
import "../Styles/Footer.scss";

function Footer() {
  return (
    <footer id="footer-new">
      <div>
        <h3>Pridružite se nam na družbenih omrežjih</h3>
        <p>Sveže novice, akcije in ponudbe.</p>
        <div>
          <a href="https://www.facebook.com/TelekomSlovenije">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook link"
            />
          </a>
          <a href="https://twitter.com/TelekomSlo">
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="Twitter link"
            />
          </a>
          <a href="https://www.instagram.com/telekom_slovenije/">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
              alt="Instagram link"
            />
          </a>
          <a href="https://www.youtube.com/user/TelekomSlovenije">
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="Youtube link"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
