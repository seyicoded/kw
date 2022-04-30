import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
//
import BackgroundImg from "../../Assets/Images/contactusbackgroundpic.png";
import contactImage1 from "../../Assets/Images/contactImage1.svg";
import GooglePlay from "../../Assets/Images/google play button.svg";
import AppleStore from "../../Assets/Images/apple store button.svg";
import { Card } from "react-bootstrap";
//
import Navbar from "../Nav";
const Styled = styled.div`
  /* background-image: url(${BackgroundImg}) */
  /* padding: 5rem 0; */
  .contact {
    /* display: flex; */
    padding-top: 19rem;
  }
  p {
    font-weight: 500;
  }
  .con {
    font-size: 18px;
  }
  button,
  a {
    display: flex;
    align-items: center;
    border-radius: 25px;
  }
  img {
    width: 80% !important;
  }
  h4,
  h3,
  p {
    color: #001d38;

    /* text-align-left; */
  }
  .secure button {
    border: 2px solid #41464b61;
    padding: 12px 0;
    outline: none !important;
    outline: 0;
  }
  .move {
    position: absolute;
    bottom: -350px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
  .card {
    background: #f1f1f1 !important;
  }

  @media only screen and (max-width: 991px) {
    .move {
      bottom: -500px;
    }
  }
  @media only screen and (max-width: 768px) {
    .buttons {
      margin-bottom: 5rem !important;
    }
  }
`;
export default function index() {
  return (
    <Styled>
      {/* <Navbar /> */}
      <div
        className="contact align-items-center justify-content-center text-center"
        // style={{ backgroundImage: `url(${BackgroundImg[1]})` }}
      >
        <div className="container">
          <h3 className="mb-3">Say Hi</h3>
          <p className="mb-5 con">
            We’ll be more than happy to answer all your questions and <br />
            inquiries. Feel free to say Hello.
          </p>
          <div className="buttons d-flex align-items-center justify-content-center mb-3 flex-wrap">
            <a
              href="https://api.whatsapp.com/message/4V2QMP4I2FOUG1"
              target="_blank"
              className="btn  btn-primary  mx-2 mx-md-4 px-4 py-3 mb-3"
              rel="noreferrer"
            >
              <span>
                <IoLogoWhatsapp size={20} color="#fff" className="me-2" />
              </span>
              Whatsapp
            </a>
            <a
              href="mailto:hello@krib.ng"
              target={"_blank"}
              rel="noreferrer"
              className="btn  btn-primary mx-2 mx-md-4 px-4 py-3 mb-3"
            >
              <span>
                <MdAlternateEmail size={20} color="#fff" className="me-2" />
              </span>
              Email
            </a>
            <a
              href="https://www.instagram.com/krib.ng/?utm_medium=copy_link"
              target={"_blank"}
              className="btn  btn-primary mx-4 px-4 py-3 mb-3"
              rel="noreferrer"
            >
              <span>
                <RiInstagramFill size={20} color="#fff" className="me-2" />
              </span>
              Instagram
            </a>
          </div>
        </div>
        <div className="position-relative">
          <div className="above py-0  py-lg-3">
            <Image src={contactImage1} alt="" />
          </div>
          <div className="pb-5 move">
            <div className="container">
              <Card>
                <div className="px-4 py-6">
                  <Card.Body className="container">
                    <div className="row">
                      <div className="col-lg-7 text-start">
                        <h4 className="">
                          Secure Verified Properties Easy & Fast
                        </h4>
                        <p>
                          House hunting is about to get seamless and
                          stress-free!
                        </p>
                      </div>
                      <div className="col-lg-5 text-start">
                        <div className="d-flex secure mb-3">
                          <button onClick={()=>{
                              window.open('https://apps.apple.com/ng/app/krib-property-without-agents/id1610076555')
                          }} className="btn  mx-2 mx-md-2  ">
                            <Image src={AppleStore} alt="" />
                          </button>
                          <button onClick={()=>{
                              window.open('https://play.google.com/store/apps/details?id=com.krib.app')
                          }} className="btn   mx-2 mx-md-2 ">
                            <Image src={GooglePlay} alt="" />
                          </button>
                        </div>
                        {/* <h2 classNamse="text-center">LAUNCHING SOON</h2> */}
                      </div>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
