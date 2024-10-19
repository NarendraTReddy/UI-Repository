import React from "react";
import "./textfield.css";
import { types } from "../Game/reducer";

const Textfield = ({ state, throwBall, dispatch }) => {
  const { frames, errorMessage, score, rolls, gameOver } = state;

  console.log(state);

  const framefirstValue =
    frames[frames.length - 1] && frames[frames.length - 1][0];
  const maxInputAllowed = 10 - (framefirstValue || 0);

  const numberFormatter = (x) => (x ? Number(x) : "");

  const handleChange = (e) => {
    const scoreValue = numberFormatter(e.target.value);
    const isInvalid =
      framefirstValue !== 10 && rolls % 2 === 1 && scoreValue > maxInputAllowed;

    dispatch({
      type: types.messageChanged,
      payload: isInvalid
        ? `Entered score is invalid, score cannot be greater than ${maxInputAllowed}`
        : "",
    });

    if (scoreValue < 10) {
      dispatch({
        type: types.enterScore,
        payload: scoreValue,
      });
    }
  };

  const handleBlur = (e) => {
    const scoreValue = numberFormatter(e.target.value);
    const isInvalid =
      framefirstValue !== 10 && rolls % 2 === 1 && scoreValue > maxInputAllowed;

    if (!isInvalid) {
      throwBall(scoreValue);
      dispatch({
        type: types.enterScore,
        payload: "",
      });
    }
  };

  const handleStrike = () => {
    throwBall(10);
    dispatch({
      type: types.enterScore,
      payload: "",
    });
  };

  return (
    <div className="container">
      <div>
        Enter Score
        <input
          id="input"
          value={score}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={gameOver}
        />
        <button
          className={"btn"}
          onClick={handleStrike}
          disabled={
            (rolls % 2 === 1 && framefirstValue > 0 && framefirstValue < 10) ||
            gameOver
          }
        >
          Strike
        </button>
        <div className="error"> {errorMessage}</div>
      </div>
    </div>
  );
};

export default Textfield;
