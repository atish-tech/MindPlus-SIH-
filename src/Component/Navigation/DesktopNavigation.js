import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { IconButton } from '@mui/material';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { useNavigate } from 'react-router-dom';

export const DesktopNavigation = () => {
    const navigater = useNavigate();
  return (
    <div className='navigation-component'>
        <div  onClick={() => {navigater('home')}} className='logo'>
            <img style={{borderRadius: "30px"}} width={100} src='https://i.ibb.co/XV7VJ2s/Screenshot-2023-09-14-122032.png' />
        </div>
        <div className='navigation-content'>


            <a className='navigation-link'>
            <IconButton onClick={() => {navigater("exercise")}} className='navigation-button'>
                <RunCircleIcon fontSize='large' />
                <p className='navigation-text-d'>Exercise</p>

            </IconButton>
            </a>
            <IconButton onClick={() => {navigater("doctor")}} className='navigation-button'>
                <LocalHospitalIcon  fontSize='large' />
                <p className='navigation-text-d'>Doctor</p>

            </IconButton>
            <IconButton onClick={() => {navigater('score')}} className='navigation-button'>
                <PsychologyAltIcon  fontSize='large' />
                <p className='navigation-text-d'>Mental Score</p>

            </IconButton>


        </div>
    </div>
  )
}
