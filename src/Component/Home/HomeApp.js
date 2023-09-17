import React from 'react'
import "./Home.css"
// import Footer from "../Footer/Footer";
import { Clouser } from './Closer/Clouser';
import HomeContent from './Content/HomeContent';
import { Navigation } from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
// import { Navigation } from '@mui/icons-material';


const HomeApp = () => {
  return (
    <>
        <Navigation/ >
        <div className='home-component'>
        <Clouser />
        <HomeContent />
          {/* <Footer  /> */}
        </div>
        <Footer />

    </>
  )
}

export default HomeApp