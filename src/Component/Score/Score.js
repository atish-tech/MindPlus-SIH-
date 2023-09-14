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

 const Score = () => {



  const [open, setOpen] = React.useState(1);
  const [score , setScore] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="mental-score-component">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>Option 1</AccordionHeader>
        <AccordionBody>
          <div>
            <button className="p-4 bg-blue-gray-200 ml-9 px-9 rounded" onClick={() => {setScore(score+1)}}  >Yes</button>
            <button className="p-4 bg-blue-gray-200 ml-9 px-9 rounded" onClick={() => {setScore(score-1)}}  >No</button>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
         <AccordionHeader onClick={() => handleOpen(2)}>Option 1</AccordionHeader>
        <AccordionBody>
          <div>
            <button className="p-4 bg-blue-gray-200 ml-9 px-9 rounded " onClick={() => {setScore(score+1)}}  >Yes</button>
            <button className="p-4 bg-blue-gray-200 ml-9 px-9 rounded " onClick={() => {setScore(score-1)}}  >No</button>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
      <AccordionHeader onClick={() => handleOpen(3)}>Option 1</AccordionHeader>
        <AccordionBody>
          <div>
            <button className="p-4 bg-blue-gray-200 ml-9 px-9 rounded" onClick={() => {setScore(score+1)}}  >Yes</button>
            <button className="p-4 bg-blue-gray-200 ml-9 px-9 rounded" onClick={() => {setScore(score-1)}}  >No</button>
          </div>
        </AccordionBody>
      </Accordion>
      <button className="bg-blue-gray-100 px-10 py-5 rounded-xl mt-5"> <MentalScore score={score} /> </button>
     
     
      </div>
    </>
  );
}


export default Score
