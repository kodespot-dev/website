const Button = ({ text, icon, reverse }) => {
  return (
    <button className={icon ? "" : "btn"} id={reverse ? "reverse" : ""}>
      {icon && <img src={icon} alt="go" />}
      {text}
    </button>
  );
};

export default Button;
