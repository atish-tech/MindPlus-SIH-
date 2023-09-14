import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { IconButton } from '@mui/material';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { useNavigate } from 'react-router-dom';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';


const PhoneNavigation = () => {
    const navigater = useNavigate();
    return (
        <div className='navigation-component-phone'>
            <div onClick={() => {navigater('home')}} className='logo'>
            <img style={{borderRadius: "30px"}} width={80} src='https://i.ibb.co/XV7VJ2s/Screenshot-2023-09-14-122032.png' />
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
                    <PsychologyAltIcon  />
                    <p className='navigation-text'>Mental Score</p>

                </IconButton>


            </div>
        </div>
    )
}

export default PhoneNavigation