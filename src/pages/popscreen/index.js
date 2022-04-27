import React from "react";
import styled from "styled-components";
import Image from "next/image";
import modalImage from "../../Assets/Images/modalImage.svg";
import { BsTwitter } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";
//modalImage
const Style = styled.div`
  padding: 15rem 0;
  small {
    color: rgba(0, 0, 0, 0.7);
  }
  .btn {
    font-weight: 500;
    border-radius: 10px;
  }
  h5 {
    font-weight: 700;
  }
  p,
  small {
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    br {
      display: none;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <div className="text-center container">
        <h5 className="mb-3">Thank you!</h5>
        <p className="">
          We have added your email address to the signup queue.
        </p>
        <div className="my-5">
          <Image src={modalImage} alt="" />
        </div>
        <h5 className="my-5">300,000 People ahead of you</h5>
        <p>Interested In Priority Access?</p>
        <small>
          Get early access by referring your friends. The more friends that
          join, the sooner you’ll get access,
        </small>
        <div className="py-3">
          <button className="btn btn-primary py-3 px-3 me-3 mb-3 ">
            <span className="me-4">
              <BsTwitter size={25} />
            </span>
            Tweet
          </button>
          <button className="btn btn-primary py-3  px-3 me-3 mb-3">
            <span className="me-4">
              <RiFacebookFill size={25} />
            </span>
            Share
          </button>
          <button className="btn btn-primary py-3  px-3 me-3 mb-3">
            <span className="me-4">
              <MdAlternateEmail size={25} />
            </span>
            Email
          </button>
          <button className="btn btn-primary py-3  px-3 me-3 mb-3">
            <span className="me-4">
              <RiInstagramFill size={25} />
            </span>
            Post
          </button>
          <br />
          <button className="btn btn-primary py-3  px-3 me-3 ">
            <span className="me-4">
              <RiLinkedinFill size={25} />
            </span>
            Share
          </button>
        </div>
        <small>Or share with this unique link below</small>
      </div>
    </Style>
  );
}
