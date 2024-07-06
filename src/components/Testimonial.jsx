import client from "../assets/client.png";
import client2 from "../assets/client2.png";
import "../styles/Testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      name: "SaraBella",
      occupation: "Frontend Developer @KodeSpot Learning Hub",
      img: client,
      feedback:
        "Excellent pace and use of time Well delivered.",
    },
    {
      name: "Edafe Raphael",
      occupation: "Frontend Developer @KodeSpot Learning Hub",
      img: client2,
      feedback:
        "Flexbook stood out in my HTML, CSS, and JavaScript learning journey. Despite it simplicity it offer me challenges that made me to think creatively and explore new possibilities.",
    },
  ];

  return (
    <section className="testimonial">
      <h2>Real Stories from the Community</h2>
      <div className="row">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            name={testimonial.name}
            img={testimonial.img}
            feedback={testimonial.feedback}
            occupation={testimonial.occupation}
            key={testimonial.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
