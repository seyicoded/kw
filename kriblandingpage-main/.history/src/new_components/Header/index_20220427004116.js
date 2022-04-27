import React from 'react';
import Image from "next/image";
// import PropTypes from 'prop-types';
import NavSection from '../Nav'
import BackgroundImage from '../../Assets/New_Images/Rectangle.svg'
 
const Header = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: 'cover',
            }}>
            <NavSection />
            a
            <Image src={`${BackgroundImage}`} />
            <img src={`${BackgroundImage}`} style={{width: 32, height: 32}}/>
        </div>
    );
}
 
export default Header;