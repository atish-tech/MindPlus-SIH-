import React from 'react'
import YogaApp from './Yoga/YogaApp'
import "./Exercise.css"
import { Navigation } from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
// import Footer from "../Footer/Footer"

const ExerciseApp = () => {
  return (
    <>
    <Navigation />
      <div className='exercise-component mb-20'>
        <YogaApp />
      </div>
      <Footer />
    </>
    )
}

export default ExerciseApp