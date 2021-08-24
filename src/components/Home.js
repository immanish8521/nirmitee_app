import React from 'react';
import '../styles/screen1.css';
import { FaChevronDown, FaSearch } from "react-icons/fa";


const Home = () => {
    return (
        <div className="parent_container">
            <div className="child_container">
                <h1>Find products. <br /> Connect with exporters.</h1>
                <p className="child_p">The leading B2B platform for Food & Beverages.</p>
                <div className="search_container">
                    <FaSearch
                        className={"search_icon"}
                    />
                    <input className="search_input" type="search" placeholder="I am looking for"/>
                    <select className="option_container" name="" id="">
                        <option className="option_container" value="#">Companies to sell</option>
                    </select>
                    <button className="search_btn">SEARCH</button>
                </div>
                <div className="down_container">
                    <button className="down_container_btn">New</button>
                    <p>Introducing: <span>Credit Check</span> your counter party through our API.</p>
                </div>
            </div>
            <FaChevronDown
                className="downChevron"
            />
        </div>
    )
}

export default Home;
