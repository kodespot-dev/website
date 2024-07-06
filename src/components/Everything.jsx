import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import solidity from "../assets/solidity.svg";
import ethereum from "../assets/ethereum.svg";
import reactcopy from "../assets/react-copy.svg";
import solana from "../assets/solana.svg";
import Card from "./Card";
import "../styles/Everything.css";
import Button from "./Button";

const Everything = () => {
  const info = [
    {
      img: html,
      title: "HTML and CSS",
      desc: "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!",
    },
    {
      img: javascript,
      title: "JavaScript",
      desc: "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
    },
    {
      img: solidity,
      title: "Solidity",
      desc: "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.",
    },
    {
      img: ethereum,
      title: "Ethereum",
      desc: "Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!",
    },
    {
      img: reactcopy,
      title: "React",
      desc: "No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.",
    },
    {
      img: solana,
      title: "Solana",
      desc: "Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.",
    },
  ];
  return (
    <section className="everything">
      <h2>Everything in one piece</h2>
      <div className="row">
        {info.map((details, index) => (
          <Card
            img={details.img}
            title={details.title}
            desc={details.desc}
            text={"Learn more"}
            key={details.title + { index }}
          />
        ))}
      </div>
      <Button text={"Explore tracks"} />
    </section>
  );
};

export default Everything;
