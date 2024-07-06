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
      desc: "Master the building blocks of the web. Learn to create stunning, responsive websites using HTML and CSS.",
    },
    {
      img: javascript,
      title: "JavaScript",
      desc: "Unlock the power of dynamic web development. Dive into JavaScript and build interactive, engaging web applications.",
    },
    {
      img: solidity,
      title: "Solidity",
      desc: "Step into the world of blockchain. Learn Solidity to create smart contracts and decentralized applications.",
    },
    {
      img: ethereum,
      title: "Ethereum",
      desc: "Explore the leading blockchain platform. Gain expertise in Ethereum to develop secure and scalable decentralized applications.",
    },
    {
      img: reactcopy,
      title: "React",
      desc: "Build modern web applications with ease. Learn React, the popular JavaScript library for creating dynamic user interfaces.",
    },
    {
      img: solana,
      title: "Solana",
      desc: "Harness the potential of high-speed blockchain technology. Learn to develop on Solana for fast and efficient decentralized solutions.",
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
