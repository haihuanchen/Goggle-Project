import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='home'>
            <h3>This is the Home Page</h3>

            <div className='home-header'>
                <div className='home-headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home-headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>

                </div>
            </div>

            <div className='home-body'>

            </div>
        </div>
    )
}

export default Home;
