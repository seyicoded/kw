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

    const CaptionTextStyled = styled.p`
        color: white;
        padding: 3px 1em;
        font-weight: 700;
        font-size: 50px;
        line-height: 60.95px;
    `

    useEffect(()=>{
        setHeight(window.innerHeight)
        // alert(window.innerHeight)
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

                    <CaptionTextStyled>
                        Digital Platform That Helps
                    </CaptionTextStyled>

                    <CaptionTextStyled>
                        You Sell, Rent And Buy 
                    </CaptionTextStyled>

                    <CaptionTextStyled>
                        Properties Without
                    </CaptionTextStyled>

                    <CaptionTextStyled>
                        The Use Of Agents
                    </CaptionTextStyled>
                </div>
                
            
        </HolderStyled>
    );
}
 
export default Header;