import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Donations from './Donations';
import Footer from './Footer';

import './home.css'


function Home() {
    return (
        <>
        <div className='home'>
            <video src='/videos/pexel-video-1.mp4' autoPlay loop muted ></video>
            <h1>HEALTHY PLANET</h1>
            <p>environmental solutions for the future</p>
            <div className="hero-btns">
                <Link to='/about' className='btn-link'>About Us</Link>
                
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>DONATION</Button>
            </div>
            
        </div>
       <Donations></Donations>
       <Footer></Footer>
        </>
    )
}

export default Home
