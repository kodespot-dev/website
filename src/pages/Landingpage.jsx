import About from "../components/About";
import Community from "../components/Community";
import Everything from "../components/Everything";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Support from "../components/Support";
import Testimonial from "../components/Testimonial";
import WhatWeDo from "../components/WhatWeDo";

const Landingpage = () => {
  return (
    <div className="landing-page">
      <Header />
      <WhatWeDo />
      <Everything />
      <About />
      <Testimonial />
      <Support />
      <Community />
      <Footer />
    </div>
  );
};

export default Landingpage;
