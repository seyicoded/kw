import React from 'react';
import Image from "next/image";
// import PropTypes from 'prop-types';
import NavSection from '../Nav'
import BackgroundImage from '../../Assets/New_Images/Rectangle.svg'
import styled from "styled-components";
 
const Header = () => {
    const HolderStyled = styled.div`
    width: 100%;
    height: 100vh;
    `;
    return (
        <HolderStyled style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${BackgroundImage.src})`,
            backgroundSize: 'cover',
            }}>
            <NavSection />
            
        </HolderStyled>
    );
}
 
export default Header;