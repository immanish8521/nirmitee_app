import React from 'react';
import '../styles/nav.css'

const Nav = () => {
    return (
        <div className="nav_container">
            <div className="nav_bar">
                <div className="nav_header">
                    <h3>Easy<span>exports</span></h3>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Support</li>
                            {/* <li className="register_btn">REGISTER</li>
                            <li className="sign_in_btn">SIGN IN</li> */}
                            <div className="sign_in_btn">
                                <div>
                                    <li className="register_btn">REGISTER</li>
                                </div>
                                <div className="side_sign_in">
                                    <button className="sign_btn">SIGN IN</button>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav;
