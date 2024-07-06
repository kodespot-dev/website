import Navbar from "./Navbar";
import "../styles/Header.css";
import Hero from "./Hero";
import rocket from "../assets/RocketLaunch.svg";

const Header = () => {
  return (
    <header>
      <Navbar icon={rocket} />
      <Hero icon={rocket} />
    </header>
  );
};

export default Header;
