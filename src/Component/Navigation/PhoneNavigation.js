import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { IconButton } from '@mui/material';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import PersonIcon from '@mui/icons-material/Person';


const PhoneNavigation = () => {
    const navigater = useNavigate();
    return (
        // Main Navigation
        <div style={{ paddingRight: "20px" }} className='navigation-component-phone'>
            {/* Navigation logo */}
            <NavLink to="/home" className='logo'>
                <img style={{ borderRadius: "30px" }} width={80} src='https://i.ibb.co/WsvT0LY/Screenshot-2023-09-14-122032-removebg-preview.png' />
            </NavLink>

            {/* Navigation Item */}
            <div className='navigation-content'>
                <NavLink to="/exercise" >
                    <IconButton className='navigation-button'>
                        <RunCircleIcon className='icon text-gray-400' />
                        <p className='icon navigation-text text-gray-400'>Exercise</p>
                    </IconButton>
                </NavLink>

                <NavLink to="/doctor">
                    <IconButton className='navigation-button' >
                        <LocalHospitalIcon className='icon text-gray-400' />
                        <p className='navigation-text icon text-gray-400'>Doctor</p>
                    </IconButton>
                </NavLink>

                <NavLink to="/score">
                    <IconButton className='navigation-button' >
                        <PsychologyAltIcon className='icon text-gray-400' />
                        <p className='navigation-text icon text-gray-400'> Score</p>
                    </IconButton>
                </NavLink>
                <NavLink to="/account">
                    <IconButton className='navigation-button' >
                        <PersonIcon className='icon text-gray-400' />
                        <p className='navigation-text icon text-gray-400'> Account</p>
                    </IconButton>
                </NavLink>


            </div>
        </div>
    )
}

export default PhoneNavigation