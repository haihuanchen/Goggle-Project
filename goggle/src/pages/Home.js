import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Search from '../components/Search'

function Home() {
    return (
        <div className='home'>
            <div className='home-header'>
                <div className='home-headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className='home-headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className='home-body'>
                <img 
                    src="https://logodix.com/logo/5.gif"
                    alt='goggle logo'
                />
                
                <Search />
            </div>
        </div>
    )
}

export default Home;
