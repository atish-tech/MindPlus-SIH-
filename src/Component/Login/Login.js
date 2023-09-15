import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"

const Login = () => {
    const notify = (p) => toast(p);
    const navigater = useNavigate()
    const [seeLogin, setSeeLogin] = useState(true);
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [loader, setLoader] = useState(false)
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // login
    const loginHandler = async () => {
        // navigater("home");
        setLoader(true)
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
            console.log((localStorage.getItem("userData")));
            navigater("home");
        }
        catch (e) {
            // console.log(e);
            notify("error occure")
        }
        setLoader(false)
    }
    // register 
    const registerHandler = async () => {
        setLoader(true)
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
                        <div className='login-container'>
                            <div className='login-image'>
                                <img style={{ borderRadius: "30px" }} width={300} src='https://i.ibb.co/XV7VJ2s/Screenshot-2023-09-14-122032.png' />
                            </div>
                            <div className='login-input-container'>
                                <div className='login-input-item'>
                                    <div>
                                        <h1 style={{ color: "green" }}>Create your Account</h1>
                                    </div>
                                    <TextField name='name' onChange={onChangeHandler} value={data.name} size='large' id="standard-basic" label="User Id" variant="outlined" />
                                    <TextField name='email' onChange={onChangeHandler} value={data.email} size='large' id="standard-basic" label="Email" variant="outlined" />
                                    <TextField name='password' onChange={onChangeHandler} value={data.password} size='large' id="standard-basic" type='password' label="Password" variant="outlined" />
                                    <Button onClick={registerHandler} style={{ color: "green" }} size='large' variant="outlined">Sign Up</Button>
                                    {
                                        loader &&
                                        <Box sx={{ display: 'flex' }}>
                                            <CircularProgress />
                                        </Box>
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
                        <div className='login-container'>
                            <div className='login-image'>
                                <img style={{ borderRadius: "30px" }} width={300} src='https://i.ibb.co/XV7VJ2s/Screenshot-2023-09-14-122032.png' />
                            </div>
                            <div className='login-input-container'>
                                <div className='login-input-item'>
                                    <div>
                                        <h1 style={{ color: "green" }}>Login To your Account</h1>
                                    </div>
                                    <TextField name='name' onChange={onChangeHandler} size='large' id="standard-basic" label="User Id" variant="outlined" />
                                    <TextField name='password' onChange={onChangeHandler} size='large' id="standard-basic" type='password' label="Password" variant="outlined" />
                                    <Button onClick={loginHandler} style={{ color: "green" }} size='large' variant="outlined">Login</Button>
                                    {
                                        loader &&
                                        <Box sx={{ display: 'flex' }}> 

                                        < CircularProgress color="inherit" />

                                    </Box>
                                    }
                                    <h3 style={{ color: "black" }} >First Time <span onClick={() => setSeeLogin(!seeLogin)} className='register-btn'>User</span></h3>
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