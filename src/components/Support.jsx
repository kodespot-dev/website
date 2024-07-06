import ArrowRight from "../assets/ArrowRight.svg";
import Button from "./Button";
import "../styles/Support.css";

const Support = () => {
  return (
    <section className="support">
      <h2>Support Us</h2>
      <p>
        Kodespot is funded by the community. Join us in empowering <br />
        learners around the globe by supporting Kodespot!
      </p>
      <div className="ctas">
        <Button text="Learn more" />
        <a href="https://buymeacoffee.com/kodespot">
          <Button text="Donate now" icon={ArrowRight} reverse={true} />
        </a>
      </div>
    </section>
  );
};

export default Support;
