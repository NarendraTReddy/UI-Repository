import React, { useReducer } from "react";

import Scorecard from "../Scorecard";
import Controls from "../Textfield";
import reducer, { initialState, types } from "./reducer";

import "./game.css";

export default function BowlingGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cumulativeScores, gameOver } = state;

  const throwBall = (pins) => {
    dispatch({ type: types.scoreChanged, payload: pins });
  };

  const getScore = () => cumulativeScores.slice(-1)[0];

  const totalScore = getScore();
  const storeData = { state, throwBall, dispatch, totalScore };

  return (
    <div className="game">
      <div className="logo">
        <span className="text"> Logo </span>
      </div>
      <div className="game-content">
        <Controls {...storeData} />
        <Scorecard totalScore={totalScore} {...storeData} />
        {gameOver && (
          <div className="game-over-text">
            <h1>Game Over</h1>
            <h2>You Scored: {totalScore}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
