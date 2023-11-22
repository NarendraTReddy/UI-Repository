import React, { useState } from "react";

import "./Controls.css";

const Controls = ({ state, throwBall }) => {
  const { frames} = state;
  const [score, setScore] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
 
  const framefirstValue =
    frames[frames.length - 1] && frames[frames.length - 1][0];
  const frameSecondValue =
    frames[frames.length - 1] && frames[frames.length - 1][1];

  const maxInputAllowed = 10 - framefirstValue;

  const numberFormatter = (x) => (x ? Number(x) : "");

  const handleChange = (e) => {
    const scoreValue = numberFormatter(e.target.value);
    let validInput = true;
    if (
      !frameSecondValue &&
      scoreValue > maxInputAllowed &&
      framefirstValue !== 10
    ) {
      validInput = false;
      setErrorMessage(
        `Entered score is invalid, score cannot be greater than ${maxInputAllowed}`
      );
    } else {
      validInput = true;
      setErrorMessage("");
    }

    if (scoreValue < 10) {
      setScore(scoreValue);
    }
  };

  const handleBlur = (e) => {
    const scoreValue = numberFormatter(e.target.value);

    let validInput = true;

    if (
      !frameSecondValue &&
      scoreValue > maxInputAllowed &&
      framefirstValue !== 10
    ) {
      validInput = false;
    }

    if (scoreValue !== "" && validInput) {
      throwBall(scoreValue);
    }
  };

  const handleStrike = () => {
    setScore("");
    throwBall(10);
  };

  return (
    <div className="Container">
      <div>
        Enter Score
        <input
          id="input"
          value={score}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button
          className={"btn"}
          onClick={handleStrike}
          disabled={
            framefirstValue &&
            framefirstValue.length === 1 &&
            framefirstValue > 0
          }
        >
          Strike
        </button>
        <div className="error"> {errorMessage}</div>
      </div>
    </div>
  );
};

export default Controls;
