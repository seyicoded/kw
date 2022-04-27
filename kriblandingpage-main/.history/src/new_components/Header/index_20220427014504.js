import React, {useState, useEffect} from 'react';
import Image from "next/image";
// import PropTypes from 'prop-types';
import NavSection from '../Nav'
import BackgroundImage from '../../Assets/New_Images/Rectangle.svg'
import styled from "styled-components";
 
const Header = () => {
    const [height, setHeight] = useState(768);
    const HolderStyled = styled.div`
    width: 100%;
    `;

    useEffect(()=>{
        setHeight(window.innerHeight)
        alert(window.innerHeight)
    }, [])
    return (
        <HolderStyled style={{
            height: height,
            backgroundImage: `url(${BackgroundImage.src})`,
            backgroundSize: 'cover',
            // backgroundColor: 'rgba(0, 29, 56, 0.85)'
            }}>
                <div style={{width: '100%', height: height, backgroundColor: 'rgba(0, 29, 56, 0.85)', position: 'absolute', zIndex: 1}} >&nbsp;</div>
                {/* <img src={`${BackgroundImage.src}`} style={{width: '100%', height: height, position: 'absolute', zIndex: 1}} /> */}
                <div style={{zIndex: 2, width: '100%', height: height, position: 'absolute'}}>
                    <NavSection />
                </div>
                
            
        </HolderStyled>
    );
}
 
export default Header;