import React, {useReducer} from 'react'

import Scorecard from '../Scorecard'
import Controls from '../Controls'
import reducer, {initialState, types}from './reducer'

import './Game.css'

export default function BowlingGame () {
  const [state, dispatch] = useReducer(reducer, initialState);

    const {
        cumulativeScores,
        gameOver,
        pins
    } = state

    const throwBall = (pins)  => {
      dispatch({ type: types.enterScore, payload: pins})
    }

    const getScore = ()  => cumulativeScores.slice(-1)[0]

    const storeData = {
      state, 
      throwBall,
      lastRoll:pins.slice(-1)[0],
      dispatch
    }
    const totalScore = getScore()

    return (
      <div className='Game'>
        <Controls
          {...storeData}
        />

        <Scorecard 
          totalScore={totalScore}
          {...storeData}
        />
        {gameOver &&
          <div className='Game-over-text'>
            <h1>Game Over</h1>
            <h2>You Scored: {totalScore}</h2>
          </div>
        }
      </div>
    )
}
