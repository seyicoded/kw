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
        font-weight: 700;
        font-size: 50px;
        line-height: 60.95px;

        @media only screen and (max-width: 768px) {
            font-size: 30px;
            // line-height: 10.95px;
            font-weight: 500;
        }
    `

    const ButtonStyled = styled.div`
        padding: 1px 3em;
    `;

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
                        <button className="btn m-0 p-0 me-4">
                            <img alt="" src={"/apple.svg"} />
                        </button>
                        <button className="btn m-0 p-0 ">
                            <img alt="" src={"/google.svg"} />
                        </button>
                    </ButtonStyled>
                    
                </div>
                
            
        </HolderStyled>
    );
}
 
export default Header;