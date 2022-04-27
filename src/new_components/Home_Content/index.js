import React from 'react';
import styled from "styled-components";
// import WhyChoseUsImage from "../../Assets/Images/animation1.gif"
import WhyChoseUsImage from "../../Assets/New_Images/whychooseus.png"
import Phone1 from "../../Assets/New_Images/Phone1.svg"
import Phone2 from "../../Assets/New_Images/Phone2.svg"
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
    background-size: contain
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
    background-size: contain
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
      
      <TwoSide
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
        </div>}/>

        <br />
        <TwoSide
        imageRight={false} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Communicate directly with the landlord or property owner. Zero
            percent agency fees.
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          We connect you directly with property owners to save you from paying agency fees. Chat with the property owners, ask questions, negotiate property pricing, and schedule tours. 
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
          <ImagePhoneElement src={`${Phone1.src}`} alt="" />
        </div>}/>

        <br />
        <TwoSide
        imageRight={true} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
          <div style={{fontSize: 30, fontWeight: '600'}}>Verified and Current Property Listings
          </div>
          <br />
          <p style={{fontSize: 18, lineHeight: 3, fontWeight: '500'}}>
          Every property listed on Krib is thoroughly verified to ensure true claim of ownership. We update listings quickly and regularly so you can stay ahead of other buyers and find the perfect property on time.
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
          <ImagePhoneElementRight src={`${Phone2.src}`} alt="" />
        </div>}/>

        <br />
        <TwoSide
        imageRight={false} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
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
        <div className='' style={{flex: 2, alignSelf: 'flex-start',}}>
          <ImagePhoneElement src={`${Phone3.src}`} alt="" />
        </div>}/>

        <br />
        <TwoSide
        imageRight={true} 
        imageBig={false}
        Text={
        <div className='' style={{flex: 1, alignSelf: 'flex-start'}}>
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
        <div className='' style={{flex: 2, alignSelf: 'flex-start',}}>
          <ImagePhoneElementRight src={`${Business_communication.src}`} alt="" style={{width: 488, height: 488}} />
        </div>}/>

        <br />
        <TwoSide
        imageRight={false} 
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
          <ImagePhoneElement src={`${I247.src}`} alt="" style={{width: 488, height: 488}}/>
        </div>}/>

    </MainContainer>
  );
}
