import React from 'react';
import img from '../Images/Human.png';
import '../styles/screen2.css';
import { FaRegEnvelope, FaRegEye } from "react-icons/fa";


const Signin = () => {
    return (
        <div className="main_container">
            <div className="left_container">
                <img className="img" src={img} alt="Main Image" />
            </div>
            <div className="right_container">
                <div className="right_corner_part">
                    <div>
                        <p>Don't have an account, yet?</p>
                    </div>
                    <div>
                        <p><a href="Register">Register</a></p>
                    </div>
                </div>
                <div className="right_main_container">
                    <div className="form_container">
                        <p>enter your detail below</p>
                        <h1>Welcome back!</h1>
                        <div className="email_container">
                            <input className="input_email_container" type="email" placeholder="Email Address" />
                            <FaRegEnvelope/>
                        </div>
                        <div className="pass_container">
                            <input className="input_pass_container" type="password" placeholder="Password" />
                            <FaRegEye/>
                        </div>
                        
                    </div>
                    
                    <div className="btn_flex">
                        <div>
                            <button className="signin_btn">sign in</button>
                        </div>
                        <div className="forgot_pass">
                            <p><a href="#">forgot your password?</a><br /><span>Don't have an account?<a href="Register">Register here</a></span></p>
                        </div>
                    </div>
                    <div className="check_box">
                        <input className="check" type="checkbox" />Keep me signed in
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;
