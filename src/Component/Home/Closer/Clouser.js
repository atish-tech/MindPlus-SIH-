// import React from 'react'
// import ClouserItem from './ClouserItem'

// export const Clouser = () => {
//     const quot = [{title: "Your mental health is just as important as your physical health"}];
//   return (
//     <div>
//         <ClouserItem data={quot[0]} />
//     </div>
//   )
// }
import { Carousel } from "@material-tailwind/react";

export function Clouser() {

  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl">
      <div className='clouser-item'>
        <h1 className="quot-text">“Your mental health is just as important as your physical health.”
        </h1>
      </div>

      <div className='clouser-item'>
        <h1 className="quot-text">“It’s okay to ask for support when you need it.”</h1>
      </div>

      <div className='clouser-item'>
        <h1 className="quot-text">“You are stronger than you realize.”</h1>
      </div>

      <div className='clouser-item'>
        <h1 className="quot-text">“Self-care is not selfish, it’s necessary for good mental health.”</h1>
      </div>

      <div className='clouser-item'>
        <h1 className="quot-text">“It’s okay to take time to focus on your mental health.”</h1>
      </div>
    </Carousel>
  );
}