import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import Button from "./Button";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";

const Navbar = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="kodespot logo" className="large" />
        <img src={logo2} alt="kodespot logo" className="medium" />
      </div>
      <div tabIndex={0} onClick={openMenu} className="menu">
        <img src={menu} alt="menu" width={48} />
      </div>
      <div className={`nav-links ${isOpen ? "menu-links show" : "menu-links"}`}>
        <ul>
          {isOpen && (
            <div id="logo">
              <img src={logo} alt="kodespot logo" />
              <img
                src={close}
                alt="close"
                width={48}
                className="close"
                onClick={closeMenu}
              />
            </div>
          )}
          <li>
            <a href="">All Tracks</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="https://buymeacoffee.com/kodespot" target="_blank">Support</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
          {isOpen && (
            <li>
              <a href="">
                <img src={icon} alt="go" />
                Get Started
              </a>
            </li>
          )}
        </ul>
        {!isOpen && <Button text="Get Started" icon={icon} />}
      </div>
    </nav>
  );
};

export default Navbar;
