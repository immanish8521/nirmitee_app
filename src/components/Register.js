import React from 'react';
import img2 from '../Images/Human2.png';
import '../styles/register.css';
import { FaRegEye } from "react-icons/fa";

const Register = () => {
    return (
        <div className="main_container">
            <div className="left_container">
                <img className="img" src={img2} alt="" />
            </div>
            <div className="parent_div">
                <div className="child_div">
                    <p>REGISTER TO EASYEXPORTS</p>
                    <h1>Get started absolutely free.</h1>
                    <div className="seller_buyer">
                        <div>
                             <p>Register as</p>
                        </div>
                        <div>
                            <button className="seller_btn">SELLER</button>
                            <button className="buyer_btn">BUYER</button>
                        </div>
                    </div>
                    <div className="company_country">
                        <div>
                            <input className="company_input" type="text" placeholder="Company" />
                        </div>
                        <div>
                            <select className="sel_country" name="" id="">
                                <option value="">Country</option>
                            </select>
                        </div>
                    </div>
                    <div className="form_number">
                        <div>
                            <select className="sel_phone_num" name="" id="">
                                <option value="">+00</option>
                            </select>
                        </div>
                        <div>
                            <input className="phone_input" type="number" placeholder="Phone Number" />
                        </div>
                        <div>
                            <input className="website_input" type="website" placeholder="Website" />
                        </div>
                    </div>
                    <div>
                        <input className="email_input" type="email" placeholder="Email address" />
                    </div>
                    <div className="password_input">
                        <input className="input_password_input" type="password" placeholder="Password" />
                        <FaRegEye style={{color:"gray"}}/>
                    </div>
                    <div>
                        <button className="register_input_btn">REGISTER</button>
                    </div>
                    <div className="terms_cond_p">
                        <p>By clicking "Register",you agree to Easyexports's <span><a href="">Terms of Services</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
