import React from 'react'
import YogaApp from './Yoga/YogaApp'
import "./Exercise.css"
import { Navigation } from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import YogaList from './Yoga/YogaList'
import { YogaItem } from './Yoga/YogaItem'
import { Exercise } from './Exercise'
// import Footer from "../Footer/Footer"

const ExerciseApp = () => {
  return (
    <>
    <Navigation  />

      <div className='exercise-component mb-20'>
        <Exercise />
      </div>
      <Footer />
    </>
    )
}



















// const ExerciseApp = () => {
//   return (
//     <>
//     <Navigation />
//       <div className='exercise-component mb-20'>
//         <YogaApp />
//       </div>
//       <Footer />
//     </>
//     )
// }

export default ExerciseApp