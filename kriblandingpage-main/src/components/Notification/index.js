import styled from "styled-components";
import { store } from "react-notifications-component";
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
// preferred way to import (from `v4`). Uses `animate__` prefix.
import "animate.css/animate.min.css";

// // Alternate way to use classes without prefix like `animated fadeIn`
// import 'animate.css/animate.compat.css';
// //Image

const Style = styled.div`
  width: 780px;

  background: #fff;
  padding: 8rem 0;
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
  img {
    width: 30% !important;
  }
  p,
  small {
    font-weight: 500;
  }
  @media only screen and (max-width: 768px) {
    width: 480px;
    br {
      display: none;
    }
  }
  @media only screen and (max-width: 568px) {
    width: 350px;
  }
`;

export const getMessage = (type, title, message) => {
  //console.log(type, title, message);
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      showIcon: true,
      onScreen: true,
      pauseOnHover: true,
    },
    dismissable: { click: true },
  });
};

export const getNotification = (type) => {
  store.addNotification({
    content: AllModal(),
    title: `${""}`,

    type: `success`,
    insert: "top",
    container: "center",
    animationIn: ["animate__animated", "animate__fadeInDown"],
    animationOut: ["animate__animated", "animate__fadeOutDown"],
    dismiss: {
      duration: 5000,
      pauseOnHover: true,
    },
    dismissable: { click: true, pauseOnHover: true },
  });
};
//modal

export const AllModal = () => {
  return (
    <Style>
      <div className="text-center container p-3">
        <h5 className="mb-3">Thank you!</h5>
        <p className="">
          We have added your email address to the signup queue.
        </p>
        <div className="my-3">
          <Image src={modalImage} alt="" />
        </div>
        <h5 className="my-3">300,000 People ahead of you</h5>
        <p>Interested In Priority Access?</p>
        <small>
          Get early access by referring your friends. The more friends that
          join, the sooner you’ll get access,
        </small>
        <div className="py-2">
          <button className="btn btn-primary py-2 px-3 me-3 mb-3 ">
            <span className="me-4">
              <BsTwitter size={25} />
            </span>
            Tweet
          </button>
          <button className="btn btn-primary py-2  px-3 me-3 mb-3">
            <span className="me-4">
              <RiFacebookFill size={25} />
            </span>
            Share
          </button>
          <button className="btn btn-primary py-2  px-3 me-3 mb-3">
            <span className="me-4">
              <MdAlternateEmail size={25} />
            </span>
            Email
          </button>
          <button className="btn btn-primary py-2  px-3 me-3 mb-3">
            <span className="me-4">
              <RiInstagramFill size={25} />
            </span>
            Post
          </button>
          <br />
          <button className="btn btn-primary py-2  px-3 me-3 ">
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
};
