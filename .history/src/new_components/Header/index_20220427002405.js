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
            {/* <img style={{width: 32, height: 32}} src={require('../../Assets/New_Images/Rectangle.svg')}/> */}
        </div>
    );
}
 
export default Header;