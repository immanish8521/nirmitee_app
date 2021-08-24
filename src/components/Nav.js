import React from 'react';
import '../styles/nav.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch()
    const userName = useSelector(state => state.username);
    const loginState = useSelector(state => state.loggedin);
    const history = useHistory();
    const logoutHandler = () => {
        dispatch({
            type: "LOG_OFF",
        })
        history.push("/Signin")
    }
    return (
        <div className="nav_container">
            <div className="nav_bar">
                <div className="nav_header">
                    <h3>Easy<span>exports</span></h3>
                </div>
                { loginState && <div className="user_info">
                    <p>Hi, <span className="user_info_name">{userName}</span></p>
                </div>}
                <div>
                    <nav>
                        <ul>
                            {
                            loginState && <NavLink exact activeClassName="active_nav" className="link" to="/">
                                Home
                            </NavLink>
                            }
                            
                           { 
                            loginState && <NavLink exact activeClassName="active_nav" className="link" to="/resetemail">
                                ResetEmail
                            </NavLink>
                            }
                            { 
                            loginState && <button className="sign_btn" onClick={logoutHandler}>Logout</button>
                            }
                           
                            <div className="sign_in_btn">
                               { !loginState && <div>
                                    <NavLink exact activeClassName="active_nav" className="register_btn" to="/register">REGISTER</NavLink>
                                </div>}
                               { !loginState && <div className="side_sign_in">
                                    <NavLink exact activeClassName="active_nav" className="sign_btn" to="/signin">SIGN IN</NavLink>
                                </div>}
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav;
