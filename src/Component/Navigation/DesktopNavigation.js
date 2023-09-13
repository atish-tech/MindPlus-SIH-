import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { useNavigate } from 'react-router-dom';

export const DesktopNavigation = () => {
    const navigater = useNavigate();
  return (
    <div className='navigation-component'>
        <div onClick={() => {navigater('/')}} className='logo'>
            <img src='https://i.ibb.co/ZKn8LQZ/Screenshot-2023-09-13-122847-removebg-preview.png' />
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
                <PeopleIcon  fontSize='large' />
                <p className='navigation-text-d'>Community</p>

            </IconButton>


        </div>
    </div>
  )
}
