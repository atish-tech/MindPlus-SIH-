import React from 'react'
import YogaApp from './Yoga/YogaApp'
import "./Exercise.css"
import Footer from "../Footer/Footer"

const ExerciseApp = () => {
  return (
    <>
      <div className='exercise-component'>
        <YogaApp />

      </div>
      <Footer />
    </>
    )
}

export default ExerciseApp