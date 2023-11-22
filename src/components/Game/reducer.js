import updateFrames from "../../utilities/updateFrames";
import updateCumulativeScore from "../../utilities/updateCumulativeScore";
import isGameOver from "../../utilities/isGameOver";
import updateCurrentRoll from "../../utilities/updateCurrentRoll";

export const types = {
  enterScore: "Game/EnterScore",
  reset: "Game/reset",
};

export const initialState = {
  frames: [],
  cumulativeScores: [],
  gameOver: false,
  pins: [],
  rolls: 0,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.enterScore:
      const { frames, cumulativeScores, pins, rolls } = state;

      return {
        ...state,
        frames: updateFrames(rolls, action.payload, frames),
        cumulativeScores: updateCumulativeScore(
          rolls,
          frames,
          cumulativeScores,
          pins,
          action.payload
        ),
        gameOver: isGameOver(rolls, action.payload, pins),
        pins: pins.concat(action.payload),
        rolls: updateCurrentRoll(rolls, action.payload),
      };
    case types.reset:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
