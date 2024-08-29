import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
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
                                        <label style={{ marginBottom: '5px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }} for="email">Email</label><br></br>
                                        <input type="email" id="email" name="email"></input>
                                    </div>
                                    <div className="loginInfo">
                                        <label
                                            style={{ marginBottom: '5px', fontFamily: 'Roboto, sans-serif', fontWeight: '400' }}
                                            htmlFor="pwd"
                                        >
                                            Password
                                        </label>
                                        <br />
                                        <span
                                            id="pwd"
                                        >
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                name="pwd"
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

                                            {showPassword ? <VisibilityOffIcon style={{ color: 'gray', cursor: 'pointer' }}
                                                onClick={() => setShowPassword(!showPassword)}></VisibilityOffIcon>:<RemoveRedEyeIcon style={{ color: 'gray', cursor: 'pointer' }}
                                                onClick={() => setShowPassword(!showPassword)}></RemoveRedEyeIcon>}
                                       
                                        </span>
                                    </div>

                                    <button className="formsubmit">Login</button>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className="right_side">
                        {/* khgbhbb */}
                    </div>

                </div>
            </div>

        </>

    );
}

export default Login;