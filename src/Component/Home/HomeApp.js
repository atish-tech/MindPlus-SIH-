import React from 'react'
import "./Home.css"
import Footer from "../Footer/Footer";
import { Clouser } from './Closer/Clouser';
import HomeContent from './Content/HomeContent';


const HomeApp = () => {
  return (
    <>
        <div className='home-component'>
        <Clouser />
        <HomeContent />
        
          <Footer  />
        </div>
    </>
  )
}

export default HomeApp