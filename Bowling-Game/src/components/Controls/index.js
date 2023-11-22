import React, {useState} from 'react'

import './Controls.css'

const Controls = ({state, throwBall}) => {

  const [score, setScore] = useState('')
  const {
    rolls,
    pins
  } = state

  const numberFormatter = (x) =>  x ? Number(x) : ''

  const handleChange = (e) => {
    const scoreValue = numberFormatter(e.target.value)

    console.log(rolls % 2 === 0 && pins[pins.length-1] + scoreValue <= 10);
    if(scoreValue<10){
      setScore(scoreValue)
    }
  }

  const handleBlur = (e) => {
    const scoreValue = numberFormatter(e.target.value)
    if (scoreValue!== '' && scoreValue<10) {
      throwBall(scoreValue)
    }
  }

  const handleStrike  = () => {
    setScore('')
    throwBall(10)
  }

    return (
      <div className='Container'>
        <div>
          Enter Score
          <input 
          id="input" 
          value={score} 
          onChange={handleChange}
          onBlur={handleBlur}/>

       <button className={'btn'} onClick={handleStrike}>Strike</button>
        </div>
      </div>
    )
}

export default Controls
