import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export const ProtectedRoute = ({Component}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const login = localStorage.getItem('login');
        
        if(!login) {
            navigate('/');
        }
    })
  return (
    <>
        <Component  />
    </>
  )
}
