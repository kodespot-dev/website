import logo from "../assets/logo.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="brand">
          <div id="logo">
            <img src={logo} alt="kodespot logo" />
          </div>
          <p>
            Building the most supportive and knowledgeable network of web3
            developers and blockchain professionals
          </p>
        </div>
        <div className="link">
          <h4>About</h4>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Success Stories</a>
            </li>
          </ul>
        </div>
        <div className="link">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Contribute</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="link">
          <h4>Guides</h4>
          <ul>
            <li>
              <a href="">Community guides</a>
            </li>
            <li>
              <a href="">Installation guides</a>
            </li>
          </ul>
        </div>
        <div className="link">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <p className="copyright">© 2024 Kodespot. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
