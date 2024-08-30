// src/components/Login.js

import React, { useState } from 'react';
import axios from 'axios';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login/', {
                email,
                password,
            }, {
                withCredentials: true,
            });
            setMessage(response.data.message);
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.error || 'An error occurred');
            } else if (error.request) {
                setMessage('No response from server');
            } else {
                setMessage('Error: ' + error.message);
            }
        }
    };

    return (
        <div className="login_container">
            <div className="login_box">
                <div className="login_left_side">
                    <h1 style={{ textAlign: 'start', marginLeft: '100px', marginTop: '20px', fontSize: '50px', fontFamily: 'Noto Sans, sans-serif', fontWeight: '400' }}>Welcome to <span style={{ color: '#CF007C', fontSize: '20px', fontWeight: 200 }}>myApplication</span></h1>
                    <div className="login_section">
                        <div className="login_section_box">
                            <div>
                                <h4 style={{ fontSize: '30px', fontFamily: 'Roboto, sans-serif', fontWeight: '500' }}>Log In</h4>
                                <p style={{ fontSize: '14px' }}>Enter Email and Password to login to your account.</p>
                            </div>
                            <form>
                                <div className="loginInfo">
                                    <label style={{ marginBottom: '5px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}>Email</label><br />
                                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="loginInfo">
                                    <label
                                        style={{ marginBottom: '5px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}
                                        htmlFor="pwd"
                                    >
                                        Password
                                    </label>
                                    <br />
                                    <span id="pwd">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            name="password"
                                            minLength="8"
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                width: '100%',
                                                outline: 'none',
                                                height: '25px',
                                                padding: '4px',
                                            }}
                                        />
                                        {showPassword
                                            ? <VisibilityOffIcon style={{ color: 'gray', cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)} />
                                            : <RemoveRedEyeIcon style={{ color: 'gray', cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)} />}
                                    </span>
                                </div>
                                <button className="formsubmit" onClick={handleSubmit}>Login</button>
                                {message && <p style={{ color: 'red' }}>{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="right_side">
                    {/* Right side content */}
                </div>
            </div>
        </div>
    );
};

export default Login;
