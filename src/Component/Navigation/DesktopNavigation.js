import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { IconButton } from '@mui/material';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import {NavLink, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

export const DesktopNavigation = () => {
    const navigater = useNavigate();
    return (
        <div className='navigation-component'>
            <NavLink to='/home' className='logo'>
                <img style={{ borderRadius: "30px" }} width={100} src='https://i.ibb.co/WsvT0LY/Screenshot-2023-09-14-122032-removebg-preview.png' />
            </NavLink>
            <div className='navigation-content'>


                {/* <a className='navigation-link'>
            <IconButton onClick={() => {navigater("exercise")}} className='navigation-button'>
                <RunCircleIcon className='text-gray-400' fontSize='large' />
                <p className='navigation-text-d text-gray-400'>Exercise</p>

            </IconButton>
            </a> */}

                <NavLink to="/exercise" >
                    <IconButton className='navigation-button'>
                        <RunCircleIcon className="icon text-gray-400" fontSize='large' />
                        <p className='icon navigation-text-d text-gray-400'>Exercise</p>
                    </IconButton>
                </NavLink>

                <NavLink to="/doctor">
                    <IconButton className='navigation-button'>
                        <LocalHospitalIcon className='icon text-gray-400' fontSize='large' />
                        <p className='icon navigation-text-d text-gray-400'>Doctor</p>
                    </IconButton>
                </NavLink>

                <NavLink to="/score">
                    <IconButton className='navigation-button'>
                        <PsychologyAltIcon className='icon text-gray-400' fontSize='large' />
                        <p className='icon navigation-text-d text-gray-400'> Score</p>
                    </IconButton>
                </NavLink>

                <NavLink to="/account">
                    <IconButton className='navigation-button'>
                        <PersonIcon className='icon text-gray-400' fontSize='large' />
                        <p className='icon navigation-text-d text-gray-400'> Account</p>
                    </IconButton>
                </NavLink>


            </div>
        </div>
    )
}
