import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProtectedRoute = ({Component}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const login = localStorage.getItem('login');
        if(!login) {
            navigate('/');
            const alert = localStorage.getItem('notification');
            localStorage.setItem('notification' , !alert)
        }
    })
  return (
    <>
        <Component  />
    </>
  )
}
