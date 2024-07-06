import star from "../assets/Star.svg";
import "../styles/Testimonial-card.css";

const TestimonialCard = ({ img, name, occupation, feedback }) => {
  return (
    <div className="testimonial-card">
      <div className="profile">
        <div className="img">
          <img src={img} alt={name} />
        </div>
        <div>
          <h4>{name}</h4>
          <p>{occupation}</p>
        </div>
      </div>
      <div className="rating">
        <div className="rates">
          <img src={star} alt="star" width={24} />
          <img src={star} alt="star" width={24} />
          <img src={star} alt="star" width={24} />
          <img src={star} alt="star" width={24} />
          <img src={star} alt="star" width={24} />
        </div>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
