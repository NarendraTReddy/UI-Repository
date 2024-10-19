import React from "react";
import "./scorecard.css";
import { types } from "../Game/reducer";

const Scorecard = ({ totalScore, state, dispatch }) => {
  const { cumulativeScores, frames, rolls } = state;

  const renderScores = (frame, roll) => {
    if (frames[frame]) {
      if (frames[frame][roll] === 0) return "-";
      else if (frames[frame][roll] === 10) return "X";
      else if (
        roll === 1 &&
        frames[frame][roll - 1] + frames[frame][roll] === 10
      )
        return "/";
      else return frames[frame][roll];
    }
    return "";
  };

  return (
    <div className="container">
      <table id="table" className="scorecard" cellPadding="1" cellSpacing="0">
        <tbody>
          <tr>
            <th id="c1" colSpan="6">
              Frame 1
            </th>
            <th id="c2" colSpan="6">
              Frame 2
            </th>
            <th id="c3" colSpan="6">
              Frame 3
            </th>
            <th id="c4" colSpan="6">
              Frame 4
            </th>
            <th id="c5" colSpan="6">
              Frame 5
            </th>
            <th id="c6" colSpan="6">
              Frame 6
            </th>
            <th id="c7" colSpan="6">
              Frame 7
            </th>
            <th id="c8" colSpan="6">
              Frame 8
            </th>
            <th id="c9" colSpan="6">
              Frame 9
            </th>
            <th id="c10" colSpan="6">
              Frame 10
            </th>
            <th id="c11" colSpan="6">
              Total Score
            </th>
          </tr>
          <tr>
            <td id="r1" colSpan="3">
              {renderScores(0, 0)}
            </td>
            <td id="r2" colSpan="3">
              {renderScores(0, 1)}
            </td>
            <td id="r3" colSpan="3">
              {renderScores(1, 0)}
            </td>
            <td id="r4" colSpan="3">
              {renderScores(1, 1)}
            </td>
            <td id="r5" colSpan="3">
              {renderScores(2, 0)}
            </td>
            <td id="r6" colSpan="3">
              {renderScores(2, 1)}
            </td>
            <td id="r7" colSpan="3">
              {renderScores(3, 0)}
            </td>
            <td id="r8" colSpan="3">
              {renderScores(3, 1)}
            </td>
            <td id="r9" colSpan="3">
              {renderScores(4, 0)}
            </td>
            <td id="r10" colSpan="3">
              {renderScores(4, 1)}
            </td>
            <td id="r11" colSpan="3">
              {renderScores(5, 0)}
            </td>
            <td id="r12" colSpan="3">
              {renderScores(5, 1)}
            </td>
            <td id="r13" colSpan="3">
              {renderScores(6, 0)}
            </td>
            <td id="r14" colSpan="3">
              {renderScores(6, 1)}
            </td>
            <td id="r15" colSpan="3">
              {renderScores(7, 0)}
            </td>
            <td id="r16" colSpan="3">
              {renderScores(7, 1)}
            </td>
            <td id="r17" colSpan="3">
              {renderScores(8, 0)}
            </td>
            <td id="r18" colSpan="3">
              {renderScores(8, 1)}
            </td>
            <td id="r19" colSpan="2">
              {renderScores(9, 0)}
            </td>
            <td id="r20" colSpan="2">
              {renderScores(9, 1)}
            </td>
            <td id="r21" colSpan="2">
              {renderScores(9, 2)}
            </td>
            <td id="total-score" className="Total" colSpan="6">
              {totalScore}
            </td>
          </tr>
          <tr>
            <td id="cumulative-score-f1" colSpan="6">
              {cumulativeScores[0]}
            </td>
            <td id="cumulative-score-f2" colSpan="6">
              {cumulativeScores[1]}
            </td>
            <td id="cumulative-score-f3" colSpan="6">
              {cumulativeScores[2]}
            </td>
            <td id="cumulative-score-f4" colSpan="6">
              {cumulativeScores[3]}
            </td>
            <td id="cumulative-score-f5" colSpan="6">
              {cumulativeScores[4]}
            </td>
            <td id="cumulative-score-f6" colSpan="6">
              {cumulativeScores[5]}
            </td>
            <td id="cumulative-score-f7" colSpan="6">
              {cumulativeScores[6]}
            </td>
            <td id="cumulative-score-f8" colSpan="6">
              {cumulativeScores[7]}
            </td>
            <td id="cumulative-score-f9" colSpan="6">
              {cumulativeScores[8]}
            </td>
            <td id="cumulative-score-f10" colSpan="6">
              {cumulativeScores[9]}
            </td>
            <td id="total-score" colSpan="6"></td>
          </tr>
        </tbody>
      </table>

      {rolls > 0 && (
        <button
          className="reset"
          onClick={() => dispatch({ type: types.reset })}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Scorecard;
