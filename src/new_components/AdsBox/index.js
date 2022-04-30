import React from 'react'
import styled from "styled-components";
import iPhone112 from "../../Assets/New_Images/iPhone112.svg"
import Photobackground from "../../Assets/New_Images/photobackground.svg"
// iPhone112.svg

export default function Index() {
    const Container = styled.div`
        margin-left: 115px;
        margin-right: 115px;
        margin-bottom: 115px;

        padding: 55px;
        padding-bottom: 0px;
        background: white;

        box-shadow: -3px -3px 10px 3px rgba(0, 0, 0, 0.05), 3px 3px 10px 3px rgba(0, 0, 0, 0.05);
        border-radius: 15px;

        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        overflow: hidden;

        @media only screen and (max-width: 768px) {
            margin-left: 15px;
            margin-right: 15px;
            margin-bottom: 15px;
            display: block;
        }
    `

    const Title = styled.h4`
    `

    const Imagee = styled.img`
        @media only screen and (max-width: 768px) {
            
        }
    `
  return (
    <Container>
        <div style={{flex: 1}}>
            <Title>
                Get the app now, and dump agency fee for good.
            </Title>

            <br />
            <div style={{fontSize: 18, lineHeight:2, fontWeight: '400'}}>
            It only takes a few minutes to start enjoying free convenience. Download Krib on Google Play or the App Store.
            </div>

            <br />
            <br />

            <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22,
            paddingRight: 33,
            paddingLeft: 33,
          }}>Get Krib</a>
          <br />
          <br />
          &nbsp;
        </div>
        <div style={{flex: 1}}>
            <Imagee src={`${iPhone112.src}`} style={{
                backgroundImage: `url(${Photobackground.src})`,
                backgroundSize: 'cover'
            }}/>
        </div>
    </Container>
  )
}
