import React from 'react'
import "./Account.css"
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

export const Account = () => {
    const userData = JSON.parse(localStorage.getItem('userData')).data;
    const navigater = useNavigate();
    const logout = () => {
        localStorage.setItem("logout" , true);
        navigater("/")
    }

    return (
        <>
        <Navigation />
            <div className='account-component mt-44 mb-44'>
            <div className='account shadow-blue-gray-900'>
                <h1 className='text-lg text-gray-900' >Account Detail</h1>

                <div className='account-detail mt-5'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p className='icon-avtar'> {(userData.name[0]).toUpperCase()} </p>
                        <p className='ml-3'> Name:  {userData.name} </p>
                    </div>

                        <p className='mt-3'> User ID: {userData.name} </p>
                        <p className='mt-3'>Email:  {userData.email} </p>
                        <button className='book-now-btn mt-3 bg-blue-gray-900 text-teal-50 px-7' onClick={logout}>Logout</button>
                </div>
            </div>
        </div>
        {/* <Footer /> */}
        </>
    )
}
