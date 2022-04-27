import React from 'react';
// import PropTypes from 'prop-types';
import NavSection from '../Nav'
 
const Header = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://www.krib.ng/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbuyscreenImage.48517710.svg&w=828&q=75)',
            }}>
            <NavSection />
        </div>
    );
}
 
export default Header;