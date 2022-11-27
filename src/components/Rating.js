import Card from "../components/Card";
import "./Rating.css";
import starImg from "../images/icon-star.svg";
import { useState } from "react";

const Rating = ({ rating, setRating, setShowThanksPage }) => {
  const [ActiveRatings, setActiveRatings] = useState({
    onestar: false,
    twostar: false,
    threestar: false,
    fourstar: false,
    fivestar: false,
  });

  const handleSubmit = () => {
    if (!rating) return;
    setShowThanksPage(true);
  };

  return (
    <Card>
      <div className="star-img-container">
        <img src={starImg} alt="" />
      </div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request.All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating">
        <div
          className={
            ActiveRatings.onestar
              ? "rating-container active"
              : "rating-container"
          }
          onClick={() => {
            setActiveRatings({
              onestar: true,
              twostar: false,
              threestar: false,
              fourstar: false,
              fivestar: false,
            });
            setRating(1);
          }}
        >
          1
        </div>
        <div
          className={
            ActiveRatings.twostar
              ? "rating-container active"
              : "rating-container"
          }
          onClick={() => {
            setActiveRatings({
              onestar: false,
              twostar: true,
              threestar: false,
              fourstar: false,
              fivestar: false,
            });
            setRating(2);
          }}
        >
          2
        </div>
        <div
          className={
            ActiveRatings.threestar
              ? "rating-container active"
              : "rating-container"
          }
          onClick={() => {
            setActiveRatings({
              onestar: false,
              twostar: false,
              threestar: true,
              fourstar: false,
              fivestar: false,
            });
            setRating(3);
          }}
        >
          3
        </div>
        <div
          className={
            ActiveRatings.fourstar
              ? "rating-container active"
              : "rating-container"
          }
          onClick={() => {
            setActiveRatings({
              onestar: false,
              twostar: false,
              threestar: false,
              fourstar: true,
              fivestar: false,
            });
            setRating(4);
          }}
        >
          4
        </div>
        <div
          className={
            ActiveRatings.fivestar
              ? "rating-container active"
              : "rating-container"
          }
          onClick={() => {
            setActiveRatings({
              onestar: false,
              twostar: false,
              threestar: false,
              fourstar: false,
              fivestar: true,
            });
            setRating(5);
          }}
        >
          5
        </div>
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </Card>
  );
};

export default Rating;
