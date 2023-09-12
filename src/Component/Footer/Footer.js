import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-component'>
        <div className='footer-logo'>
            <h1>Logo</h1>
        </div>
        <div className='footer-page'>
            <h1>About Us</h1>
            <hr className='horizontal'></hr>
            <h1>Contact</h1>
            <hr className='horizontal'></hr>
        </div>
        <div className='footer-privacy'>
            <h2>Term & Condition</h2>
            <hr className='horizontal'></hr>
        </div>
    </div>
  )
}

export default Footer