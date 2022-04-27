import React from 'react';
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
            <img src={`${BackgroundImage}`}/>
        </div>
    );
}
 
export default Header;