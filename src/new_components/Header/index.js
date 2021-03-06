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
        padding: 1px 1em;
        font-weight: 600;
        font-size: 50px;
        line-height: 60.95px;

        @media only screen and (max-width: 768px) {
            font-size: 30px;
            // line-height: 10.95px;
            font-weight: 500;
            padding: 1px 1em;
        }
    `

    const ButtonStyled = styled.div`
        padding: 8px 3em;

        @media only screen and (max-width: 768px) {
            padding: 1px 1em;
        }
    `;

    useEffect(()=>{
        setHeight(window.innerHeight)
        // alert(window.innerHeight)
    }, [])
    return (
        <HolderStyled id="top" style={{
            height: height,
            backgroundImage: `url(${BackgroundImage.src})`,
            backgroundSize: 'cover',
            // backgroundColor: 'rgba(0, 29, 56, 0.85)'
            }}>
                <div style={{width: '100%', height: height, backgroundColor: 'rgba(0, 29, 56, 0.85)', position: 'absolute', zIndex: 1}} >&nbsp;</div>
                {/* <img src={`${BackgroundImage.src}`} style={{width: '100%', height: height, position: 'absolute', zIndex: 1}} /> */}
                <div style={{zIndex: 2, width: '100%', height: height, position: 'absolute'}}>
                    <NavSection />

                    <CaptionTextStyled className='animate__animated animate__fadeInLeft'>
                        Digital Platform That Helps
                    </CaptionTextStyled>

                    <CaptionTextStyled className='animate__animated animate__fadeInLeft'>
                        You Sell, Rent And Buy 
                    </CaptionTextStyled>

                    <CaptionTextStyled className='animate__animated animate__fadeInLeft'>
                        Properties Without
                    </CaptionTextStyled>

                    <CaptionTextStyled className='animate__animated animate__fadeInLeft'>
                        The Use Of Agents
                    </CaptionTextStyled>

                    <ButtonStyled>
                        <button onClick={()=>{
                            window.open('https://apps.apple.com/ng/app/krib-property-without-agents/id1610076555')
                        }} className="btn m-0 p-0 py-2 me-4 animate__animated animate__fadeInLeft">
                            <img alt="" src={"/apple.svg"} />
                        </button>
                        <button onClick={()=>{
                            window.open('https://play.google.com/store/apps/details?id=com.krib.app')
                        }} className="btn m-0 p-0 animate__animated animate__fadeInLeft">
                            <img alt="" src={"/google.svg"} />
                        </button>
                    </ButtonStyled>
                    
                </div>
                
            
        </HolderStyled>
    );
}
 
export default Header;