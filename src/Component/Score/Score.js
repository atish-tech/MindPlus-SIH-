// import React from 'react'
// import "./Score.css"
// const Score = () => {
//     let score = 0;

//   return (
//     <div className='mental-score-component'>

//     </div>
//   )
// }

// export default Score


import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "./Score.css"
import MentalScore from "./MentalScore";
const data = [
  { id: 1, question: "1.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 2, question: "2.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 3, question: "3.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 4, question: "4.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
  { id: 5, question: "5.)How have you been feeling lately?", ans: ["a).Great", " b) Okay ", "c) Not so good", "d) Terrible"] },
]
const Score = () => {
  const [score, setScore] = useState(0);
  const updateScore = (e) => {
    setScore(score + parseInt(e.target.value))
  }
  return (
    <>
    <div className="mt-32"></div>
      <div className="mental-score-component">
        <h1>Depression Questions</h1>
        {
          data.map(d => {
            return (
              <div key={d.id} className="question-container">
                <p>{d.question}</p>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' className="box" /><span>{d.ans[0]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' /><span>{d.ans[1]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' /><span>{d.ans[2]}</span>
                </div>
                <div className="checkbox">
                  <input onChange={updateScore} type="checkbox" value='4' /><span>{d.ans[3]}</span>
                </div>
              </div>
            )
          })
        }
        <button className="bg-blue-gray-100 px-10 py-5 rounded-xl mt-5"> <MentalScore score={score} /> </button>
      </div>
    </>
  );
}


export default Score
