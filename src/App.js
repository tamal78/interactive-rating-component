import "./App.css";
import Card from "./components/Card";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";
import { useState } from "react";

const App = () => {
  const [showThanksPage, setShowThanksPage] = useState(false);
  const [rating, setRating] = useState(null);
  return (
    <>
      {showThanksPage ? (
        <Thanks rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThanksPage={setShowThanksPage}
        />
      )}
    </>
  );
};

export default App;
