import React from 'react';
// import PropTypes from 'prop-types';
import NavSection from '../Nav'
 
const Header = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: require('../../Assets/New_Images/Rectangle.svg')
            }}>
            <NavSection />
        </div>
    );
}
 
export default Header;