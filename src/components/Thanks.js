import Rating from "./Rating";
import Card from "./Card";
import "./Thanks.css";
import thanksImg from "../images/illustration-thank-you.svg";

const Thanks = ({ rating }) => {
  return (
    <Card>
      <div className="thanks-img-container">
        <img src={thanksImg} alt="" />
      </div>
      <div className="selected">
        <p>You selected {rating} out of 5</p>
      </div>
      <h2 className="title">Thank You!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default Thanks;
