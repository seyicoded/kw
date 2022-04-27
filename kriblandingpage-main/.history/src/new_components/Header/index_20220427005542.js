import React from 'react';
import Image from "next/image";
// import PropTypes from 'prop-types';
import NavSection from '../Nav'
import BackgroundImage from '../../Assets/New_Images/Rectangle.svg'
import styled from "styled-components";
 
const Header = () => {
    const HolderStyled = styled.div`
    width: 100%;
    `;
    return (
        <HolderStyled style={{
            height: window.screen.height,
            // backgroundImage: `url(${BackgroundImage.src})`,
            // backgroundSize: 'cover',
            backgroundColor: 'rgba(0, 29, 56, 0.25)'
            }}>
            <NavSection />
            <img src={`${BackgroundImage.src}`} style={{width: '100%', height: '100%', position: 'absolute', zIndex: -2}} />
        </HolderStyled>
    );
}
 
export default Header;