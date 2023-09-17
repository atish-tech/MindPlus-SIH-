import { Alert, Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"
import { Circles } from 'react-loader-spinner';

const Login = ({ notification }) => {
    const notify = (p) => toast(p);
    const navigater = useNavigate()
    const [seeLogin, setSeeLogin] = useState(true);
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [loader, setLoader] = useState(false)
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const alert = localStorage.getItem('notification');
    useEffect(() => {
        notify("You need login to access the page");
        notify("only you can access Home pege without page")
    }, [alert])

    // login
    const loginHandler = async () => {
        // navigater("home");
        if (data.email.length === "" || data.password === "") {
            notify("Input field is empty");
            return;
        }
        setLoader(true);

        const temp = {
            name: data.name,
            password: data.password
        };

        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const response = await axios.post("https://mind-plus-sih-git-backend-atish-tech.vercel.app/user/login",
                temp, config);
            localStorage.setItem("userData", JSON.stringify(response));
            localStorage.setItem('data' , JSON.stringify(data));
            localStorage.setItem("login", true);
            localStorage.setItem("logout", false);
            console.log((localStorage.getItem("userData")));
            navigater("home");
        }
        catch (e) {
            // console.log(e);
            notify("error occer")
        }
        setLoader(false)
    }
    // register 
    const registerHandler = async () => {

        if (data.name.length < 1 || data.email.length < 1 || data.password < 1) {
            notify("Input field is empty");
            return;
        }
        setLoader(true);

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await axios.post(
                "https://mind-plus-sih-git-backend-atish-tech.vercel.app/user/register",
                data, config
            );
            localStorage.setItem("userData", JSON.stringify(response));
            localStorage.setItem("login", true);
            localStorage.setItem("logout", false);
            navigater("home");

        }
        catch (e) {
            notify("error occure")
            console.log("error");
            console.log(e);
        }
        setLoader(false)
    }

    return (
        <>
            <div className='login-con-main'>
                { // Sign Up
                    seeLogin && (
                        <div className='login-container shadow-blue-gray-800 px-4 bg-blue-gray-300'>
                            <div className='login-image'>
                                <img style={{ borderRadius: "30px" }} width={300} src='https://i.ibb.co/WsvT0LY/Screenshot-2023-09-14-122032-removebg-preview.png' />
                            </div>
                            <div style={{ backgroundColor: "#fff" }} className='login-input-container '>
                                <div className='login-input-item'>
                                    <div>
                                        <h1 className='text-blue-gray-500' >Create your Account</h1>
                                    </div>
                                    <TextField className='' name='name' onChange={onChangeHandler} value={data.name} size='large' id="standard-basic" label="User Id" variant="outlined" />
                                    <TextField className='' name='email' onChange={onChangeHandler} value={data.email} size='large' id="standard-basic" label="Email" variant="outlined" />
                                    <TextField className='' name='password' onChange={onChangeHandler} value={data.password} size='large' id="standard-basic" type='password' label="Password" variant="outlined" />
                                    <Button onClick={registerHandler} style={{ color: "green" }} size='large' variant="outlined">Sign Up</Button>
                                    {
                                        loader &&
                                        <Circles
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="circles-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    }
                                    <h3 style={{ color: "black" }} >Already have a <span onClick={() => setSeeLogin(!seeLogin)} className='register-btn'>Account</span> </h3>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    )
                }


                { // Login
                    !seeLogin && (
                        <div className='login-container shadow-blue-gray-800 px-4 bg-blue-gray-300'>
                            <div className='login-image'>
                                <img style={{ borderRadius: "30px" }} width={300} src='https://i.ibb.co/WsvT0LY/Screenshot-2023-09-14-122032-removebg-preview.png' />
                            </div>
                            <div style={{ backgroundColor: "#fff" }} className='login-input-container '>
                                <div className='login-input-item'>
                                    <div>
                                        <h1 className='text-blue-gray-500'>Login To your Account</h1>
                                    </div>
                                    <TextField name='name' onChange={onChangeHandler} size='large' id="standard-basic" label="User Id" variant="outlined" />
                                    <TextField name='password' onChange={onChangeHandler} size='large' id="standard-basic" type='password' label="Password" variant="outlined" />
                                    <Button onClick={loginHandler} style={{ color: "green" }} size='large' variant="outlined">Login</Button>
                                    {
                                        loader &&
                                        <Circles
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="circles-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />

                                    }
                                    <h3 style={{ color: "black" }} >First Time <span onClick={() => setSeeLogin(!seeLogin)} className='register-btn'>User</span></h3>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Login