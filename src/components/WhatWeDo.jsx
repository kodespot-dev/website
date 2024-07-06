import blockchain from "../assets/blockchain.svg";
import learninghub from "../assets/learninghub.svg";
import network from "../assets/network.svg";
import Card from "./Card";
import "../styles/What.css";

const WhatWeDo = () => {
  const info = [
    {
      img: blockchain,
      title: "Blockchain Services",
      desc: "Kodespot provides a range of blockchain services, including access to the latest insights, trends, and practical applications in Web3 and blockchain technology.",
    },
    {
      img: learninghub,
      title: "Learning Hub",
      desc: "Continually enhance your skills and knowledge. Through workshops, tutorials, and community-driven learning initiatives, ensuring every member can stay ahead in the rapidly evolving tech landscape.",
    },
    {
      img: network,
      title: "Supportive Network",
      desc: "We fosters an environment where members can transform into impactful innovators in the tech landscape through access to expert knowledge and blockchain services.",
    },
  ];
  return (
    <section className="what-we-do">
      <h2>What we do</h2>
      <div className="row">
        {info.map((details, index) => (
          <Card
            img={details.img}
            title={details.title}
            desc={details.desc}
            key={details.title + { index }}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
