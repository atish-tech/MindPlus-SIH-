import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { IconButton } from '@mui/material';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { useNavigate } from 'react-router-dom';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';


const PhoneNavigation = () => {
    const navigater = useNavigate();
    return (
        <div style={{paddingRight: "20px"}} className='navigation-component-phone'>
            <div onClick={() => {navigater('home')}} className='logo'>
            <img style={{borderRadius: "30px"}} width={80} src='https://i.ibb.co/WsvT0LY/Screenshot-2023-09-14-122032-removebg-preview.png' />
            </div>
            <div className='navigation-content'>

            <a className='navigation-link'>
                <IconButton onClick={() => {navigater("exercise")}} className='navigation-button'>
                    <RunCircleIcon className='text-gray-400' />
                    <p className='navigation-text text-gray-400'>Exercise</p>
                </IconButton>
                </a>
                <IconButton onClick={() => {navigater("doctor")}} className='navigation-button' >
                    <LocalHospitalIcon className='text-gray-400' />
                    <p className='navigation-text text-gray-400'>Doctor</p>

                </IconButton>
                <IconButton onClick={() => {navigater('score')}} className='navigation-button' >
                    <PsychologyAltIcon className='text-gray-400'  />
                    <p className='navigation-text text-gray-400'> Score</p>

                </IconButton>


            </div>
        </div>
    )
}

export default PhoneNavigation