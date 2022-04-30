import React from 'react';
import styled from "styled-components";
// import WhyChoseUsImage from "../../Assets/Images/animation1.gif"
import WhyChoseUsImage from "../../Assets/New_Images/whychooseus.png"
import Seller1 from "../../Assets/New_Images/Seller1.svg"
import Seller2 from "../../Assets/New_Images/Seller2.svg"
import Seller3 from "../../Assets/New_Images/Seller3.svg"
import Seller4 from "../../Assets/New_Images/Seller4.svg"
import Phone3 from "../../Assets/New_Images/Phone3.svg"
import Photobackground from "../../Assets/New_Images/photobackground.svg"
import Business_communication from "../../Assets/New_Images/Business_communication.svg"
import I247 from "../../Assets/New_Images/I247.svg"
// I247.svg

export default function Home_content() {
  const MainContainer = styled.div`
    padding: 200px 100px;

    @media only screen and (max-width: 768px) {
      
      padding: 100px 1em;
    }

    padding-bottom: 0px;
  `

  const InnerContainer = styled.div`
    margin-bottom: 10em;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */

    @media only screen and (max-width: 768px) {
      display: block;
      flex-direction: column;
    }
  `

  const ImagePhoneElement = styled.img`
    backdrop-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 631px;
    height: 594px;
    right: 48px;
    position: relative;
    background: url(${Photobackground.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    @media only screen and (max-width: 768px) {
      width: 431px;
      height: 594px;
      right: 48px;
    }
  `

  const ImagePhoneElementRight = styled.img`
    backdrop-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width: 631px;
    height: 594px;
    left: 108px;
    position: relative;
    background: url(${Photobackground.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media only screen and (max-width: 768px) {
      width: 431px;
      height: 594px;
      left: -15px;
    }
  `

  const TwoSide = ({Text, Imagee, imageRight, imageBig}) =>{
    return (
      <InnerContainer className=''>
        {
          imageRight ? 
          <>
            {Text}
            {Imagee}
          </>: 
          <>
            {Imagee}
            {Text}
          </>
        }
      </InnerContainer>
    )
  }

  return (
    <MainContainer>
      
      {/* <TwoSide
        imageRight={true} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 2, alignSelf: 'center'}}>
          <h3>Why Choose Krib?</h3>
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
            In a digitized world where software and artificial intelligence tools are ruling, how can real estate transactions be automated?
          </p>
        </div>}
        Imagee={
        <div className='' style={{flex: 1,}}>
          <img src={`${WhyChoseUsImage.src}`} alt="" style={{width: 474, height: 474}}/>
        </div>}/> */}

        <br />
        <TwoSide
        imageRight={true} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Simple Listing Process
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          As a property owner, you can list your property in 5 easy steps. Just fill out our super-simple form. Your property will go live after verification. 

          </p>
          <br />

          <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22
          }}>Download App</a>
        </div>}
        Imagee={
        <div className='' style={{flex: 2, alignSelf: 'flex-start'}}>
          <ImagePhoneElementRight src={`${Seller1.src}`} alt="" />
        </div>}/>

        <br />
        <TwoSide
        imageRight={false} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 2, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Boost property value and entice purchasers with gorgeous home photos
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          A picture is worth more than a thousand words. Krib offers the architectural capturing of your property’s interior and exterior for free. This boosts its market appeal and increase the chances of getting your property sold quickly.

          </p>
          <br />

          <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22
          }}>Download App</a>
        </div>}
        Imagee={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
          <ImagePhoneElement src={`${Seller2.src}`} alt="" />
        </div>}/>

        {/* start */}

        <br />
        <TwoSide
        imageRight={true} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Access to Multiple Buyers and Faster Sales 
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          Gain access to a myriad of buyers, renters for your property by showcasing it as many times as possible so you can sell and close contracts faster.
          </p>
          <br />

          <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22
          }}>Download App</a>
        </div>}
        Imagee={
        <div className='' style={{flex: 2, alignSelf: 'flex-start'}}>
          <ImagePhoneElementRight src={`${Seller3.src}`} alt="" />
        </div>}/>

        <br />
        <TwoSide
        imageRight={false} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 2, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Communicate directly with the tenant or buyer. No agents!
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          If a buyer or renter likes your property, they will send you a message. Chat with them, profile and ask questions, and schedule tours. No agency fees? More money for you.
          </p>
          <br />

          <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22
          }}>Download App</a>
        </div>}
        Imagee={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
          <ImagePhoneElement src={`${Seller4.src}`} alt="" />
        </div>}/>

        {/* stop */}

        <br />
        <TwoSide
        imageRight={true} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 2, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Secure and Instant Payment 
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          Pay for property rent/purchase with your internet or mobile banking credentials. Your landlord or property owner gets payment within minutes. No fees, Instant transfer, 100% safe.
          </p>
          <br />

          <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22
          }}>Download App</a>
        </div>}
        Imagee={
        <div className='' style={{flex: 1, alignSelf: 'flex-start',}}>
          <ImagePhoneElementRight src={`${Phone3.src}`} alt="" />
        </div>}/>

        <br />
        <TwoSide
        imageRight={false} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 2, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Online Rent Agreement
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          Sign and download your rent agreement in minutes of payment. Super quick and easy! Documents are genuine and legally valid in a court of law. 
          </p>
          <br />

          <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22
          }}>Download App</a>
        </div>}
        Imagee={
        <div className='' style={{flex: 1, alignSelf: 'flex-start',}}>
          <ImagePhoneElement src={`${Business_communication.src}`} alt="" style={{width: 488, height: 488}} />
        </div>}/>

        <br />
        <TwoSide
        imageRight={true} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Friendly Support
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          You can slide into our DMs, tweet, send a  mail, Whatsapp message, leave an Instagram comment. We are very friendly, empathetic, and always looking out for you.
          </p>
          <br />

          <a href="#top" style={{
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: 'white',
            background: 'rgba(0, 29, 56, 1)',
            borderRadius: 15,
            padding: 22
          }}>Download App</a>
        </div>}
        Imagee={
        <div className='' style={{flex: 2, alignSelf: 'flex-start',}}>
          <ImagePhoneElementRight src={`${I247.src}`} alt="" style={{width: 488, height: 488}}/>
        </div>}/>

    </MainContainer>
  );
}
