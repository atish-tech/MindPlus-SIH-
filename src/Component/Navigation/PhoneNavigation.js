import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { useNavigate } from 'react-router-dom';

const PhoneNavigation = () => {
    const navigater = useNavigate();
    return (
        <div className='navigation-component-phone'>
            <div onClick={() => {navigater('/')}} className='logo'>
            <img width={80} src='https://i.ibb.co/ZKn8LQZ/Screenshot-2023-09-13-122847-removebg-preview.png' />
            </div>
            <div className='navigation-content'>

            <a className='navigation-link'>
                <IconButton onClick={() => {navigater("exercise")}} className='navigation-button'>
                    <RunCircleIcon  />
                    <p className='navigation-text'>Exercise</p>
                </IconButton>
                </a>
                <IconButton onClick={() => {navigater("doctor")}} className='navigation-button' >
                    <LocalHospitalIcon />
                    <p className='navigation-text'>Doctor</p>

                </IconButton>
                <IconButton onClick={() => {navigater('score')}} className='navigation-button' >
                    <PeopleIcon  />
                    <p className='navigation-text'>Community</p>

                </IconButton>


            </div>
        </div>
    )
}

export default PhoneNavigation