import React from 'react';
import Image from "next/image";
// import PropTypes from 'prop-types';
import NavSection from '../Nav'
import BackgroundImage from '../../Assets/New_Images/Rectangle.png'
 
const Header = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${BackgroundImage.src})`,
            backgroundSize: 'cover',
            }}>
            <NavSection />
            a
            {/* <Image src={`${BackgroundImage}`} /> */}
            <img src={`${BackgroundImage.src}`} style={{width: 32, height: 32}}/>
        </div>
    );
}
 
export default Header;