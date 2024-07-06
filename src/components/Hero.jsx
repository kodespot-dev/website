import "../styles/Hero.css";
import Button from "./Button";

const Hero = ({ icon }) => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Your <span>Web3 Career</span> <br />
          Starts Here
        </h1>
        <p>
          Our professionally crafted Tracks will provide you with the best
          tools, knowledge and opportunities needed to excel in web3 and
          blockchain technology
        </p>
      </div>
      <div className="ctas">
        <Button text="Get Started" icon={icon} />
        <Button text="View All Tracks" />
      </div>
    </section>
  );
};

export default Hero;
