import React from 'react';
import img1 from '../Images/Human1.png';
import '../styles/screen3.css';
import { FaRegEnvelope } from "react-icons/fa";

const Screen3 = () => {
    return (
        <div className="main_container">
            <div className="left_container">
                <img className="img" src={img1} alt="" />
            </div>
            <div className="parent_div">
                    <div className="child_div">
                        <p>ENTER YOUR EMAIL ADDRESS BELOW TO RETRIEVE YOUR ACCOUNT</p>
                        <h1>Forgot your password? <br />We'll help you!</h1>
                        <div className="email_container">
                            <input className="input_email_container" type="email" placeholder="Email Address" />
                            <FaRegEnvelope/>
                        </div>
                        <div className="btn_flex">
                            <div>
                                <button className="signin_btn">SEND RESET EMAIL</button>
                            </div>
                            <div className="forgot_pass">
                                <p>Back to <a href="">Sign in</a><br />Don't have an account?<a href="">Register here</a></p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Screen3;
