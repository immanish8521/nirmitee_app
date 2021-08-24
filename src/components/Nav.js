import React from 'react';
import '../styles/nav.css';
import { NavLink } from 'react-router-dom';

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
                            <NavLink exact activeClassName="active_nav" className="link" to="/">
                                Home
                            </NavLink>
                            <NavLink exact activeClassName="active_nav" className="link" to="/resetemail">
                                ResetEmail
                            </NavLink>
                           
                            <div className="sign_in_btn">
                                <div>
                                    <NavLink exact activeClassName="active_nav" className="register_btn" to="/register">REGISTER</NavLink>
                                </div>
                                <div className="side_sign_in">
                                    <NavLink exact activeClassName="active_nav" className="sign_btn" to="/signin">SIGN IN</NavLink>
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
