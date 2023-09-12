import React from 'react'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { Backdrop, Button, Typography } from '@mui/material';
import DoctorBackdrop from './D';
import DoctorBackdrop2 from './D2';

const DoctorCart = ({ data }) => {
  return (
    <div key={data.contact} className='doctor-cart'>
      <div className='doctor-detail'>
        <div>
          <img className='doctor-img' src={data.imageUrl} />
        </div>
        <div style={{ width: "100%" }}>
          <p>{data.noOfSession} Happy Session</p>
          <h2> {data.name} </h2>
          <p><WorkspacePremiumIcon /> <span>{data.specification}</span></p>
          <p><EventNoteIcon /> <span> {data.experience}+ Yr of experience</span></p>
          <p><GTranslateIcon /> <span>{data.language}</span></p>
        </div>
      </div>
      <hr ></hr>

      <div className='doctor-detail-bottom'>
        <div>
          <p>Next Slot: {data.session}</p>
          {/* <button  className='book-now-btn'>Contact</button> */}
          <DoctorBackdrop2 key={data.contact} email={data.email} domain={data.domain} />
        </div>
        {/* <button className='book-now-btn'>Book Now</button> */}


        <div>

        <DoctorBackdrop key={data.contact} contact={data.contact} />
          
        </div>
      </div>
    </div>
  )
}

export default DoctorCart