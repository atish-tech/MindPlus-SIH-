import React, { useState } from 'react'
import "./Footer.css"
import { IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const [privacy, setPrivacy] = useState(false);
  const navigater = useNavigate();

  return (
    <div className='footer-component'>
      <div style={{ display: "flex", flexDirection: "column" }} className='footer-logo'>
        <img style={{borderRadius: "30px"}} width={200} onClick={() => { navigater('home') }} src='https://i.ibb.co/WsvT0LY/Screenshot-2023-09-14-122032-removebg-preview.png' />
        <a
          style={{ color: "#091353" }}
          href="mailto:max.meantalhealth@gmail.com"
        >
          <IconButton>

            <EmailIcon fontSize='large' />
            <span>
              mentalhealth@gmail.com
            </span>
          </IconButton>
        </a>
      </div>


      <div className='footer-page'>
        <h1>About Us</h1>
        <hr className='horizontal'></hr>
        <h1>Contact</h1>
        <hr className='horizontal'></hr>
      </div>

      
      <div className='footer-privacy'>

        {privacy ?


          <div style={{width: "100%"}}> <p>
            Your data is perfectly safe with us. But you need to know
            how your data is processed and what can you do with it as a
            user.</p>
            <p>We constantly improve CraftCv system, we do it to give our users the best Resume builder in the Internet. We want you to feel safe using our service</p>
            <p> Some of the terms used below may turn out to be a bit
              complicated, but we have done our best to present them to
              you in a simple manner.
            </p>
            <p>
              While registering on CraftCv, you agree to provide us with
              certain pieces of information about you. Information like:
              your name, surname, e-mail address, phone number, gender,
              age, place of residence, date of birth, information on the
              education, achieved degrees, courses attended, lectures,
              certificates or licenses, information on the membership in
              associations or organisations, language skills, information
              on former professional experience or practice, hobbies,
              picture, other data provided by you. If you decide to
              purchase a paid bundle, we will receive info on the payment,
              including your personal data (name, surname, place of
              residence, and phone number), as well as detailed
              information about the transaction itself.{" "}
            </p>
            <button onClick={() => { setPrivacy(false) }} className="cancel-btn">Cancel</button>

            <hr className='horizontal'></hr>
          </div>
          :
          <IconButton onClick={() => { setPrivacy(true) }}><h2>Term & Condition</h2></IconButton>
        }
      </div>
    </div>
  )
}

export default Footer