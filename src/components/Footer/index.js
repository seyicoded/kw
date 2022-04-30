/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../Assets/Images/logo.svg";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";
import { vaildSubscribe } from "../../utils/vaildator";
import { getMessage } from "../Notification";
import { Spinner } from "react-bootstrap";
import Link from "next/link";

//
const Styled = styled.div`
  padding: ${(props) => props.padding};
  background: #001d38;
  li,
  p {
    font-size: 15px;
  }
  .icon {
    display: flex;
    align-items: center;
    right: 10px;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
  }
  svg {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
  h5 {
    font-size: 18px !important;
    font-weight: 600 !important;
  }
  img {
    width: 100%;
  }
`;

export default function Index({ padding }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(message);
    if (message?.success === false) {
      getMessage(
        "danger",
        message?.reason ? message?.reason : "Message",
        message?.message
      );
      setMessage(null);
    }
    if (message?.success) {
      setMessage(null);
      setEmail("");
      getMessage("success", "Message", message?.message);
    }
  }, [message]);
  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const vaildation = vaildSubscribe(email);

    console.log(vaildation);
    if (vaildation?.success === false)
      return getMessage("danger", "Message", vaildation?.message);

    setLoading(true);

    const emailData = { emailAddress: email };
    const reponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}waitlist/subcribe`,
      {
        method: "Post",
        body: JSON.stringify(emailData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await reponse.json();
    setLoading(false);
    //set state to intialstate here
    // console.log(data);
    setMessage(data);
  };
  return (
    <Styled padding={padding}>
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className=" col-md-6 col-lg-1 px-5 px-md-0  mb-4">
            <div className="mb-3">
              <Image src={Logo} alt="" />
            </div>
          </div>
          <div className="col-lg-10 text-white px-5 mb-4">
            <div className="row g-0 justify-content-evenly">
              <div className="col-md-6 col-lg-3 mb-3 d-flex">
                <div className="me-0 mx-lg-auto">
                  <h5 className="mb-4">
                    <Link href="/#">
                      <a>Features</a>
                    </Link>
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link href="/">
                        <a>Krib </a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/seller">
                        <a>Sell</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/#">
                        <a>Rent</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/buyer">
                        <a>Buy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-3 d-flex">
                <div className="me-0 mx-lg-auto">
                  <h5 className="mb-4">Company</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link href="/#">
                        <a>Blog</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/#">
                        <a>Press</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href="/#">
                        <a>Join Our Team</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      {" "}
                      <Link href="/">
                        <a>About Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-3 d-flex">
                <div className="ms-0 mx-lg-auto">
                  <h5 className="mb-4">
                    <Link href={"/#"}>
                      <a>Help</a>
                    </Link>
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link href={"/#"}>
                        <a>Get Help</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href={"/faqs"}>
                        <a>FAQs</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href={"/#"}>
                        <a>Security</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href={"/contact"}>
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-3 d-flex ">
                <div className="ms-0 mx-lg-auto">
                  <h5 className="mb-4">
                    <Link href={"/#"}>
                      <a>Transparency</a>
                    </Link>
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <Link href={"/terms"}>
                        <a>Terms of Service</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href={"/privacy-policy"}>
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li className="mb-3">
                      <Link href={"/#"}>
                        <a>Cookie Policy</a>
                      </Link>
                    </li>
                    {/* <li className="mb-3"> .</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row g-5">
            <div className="col-lg-5 d-flex mb-5">
              <button onClick={()=>{
                  window.open('https://apps.apple.com/ng/app/krib-property-without-agents/id1610076555')
              }} className="btn m-0 p-0 me-4">
                <img alt="" src={"/apple.svg"} />
              </button>
              <button onClick={()=>{
                  window.open('https://play.google.com/store/apps/details?id=com.krib.app')
              }} className="btn m-0 p-0 ">
                <img alt="" src={"/google.svg"} />
              </button>
            </div>
            <div className="col-lg-5">
              <div>
                <h5 className="text-white mb-3">Contact</h5>
                <div>
                  <div className="d-flex flex-wrap flex-wrap  me-2 me-md-3">
                    <a
                      href="https://www.instagram.com/krib.ng/?utm_medium=copy_link"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <RiInstagramFill
                        size={25}
                        color="#fff"
                        className="me-3 mb-2"
                      />
                    </a>

                    <a
                      href="https://wa.me/message/4V2QMP4I2FOUG1"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <IoLogoWhatsapp
                        size={25}
                        color="#fff"
                        className="me-3 mb-2"
                      />
                    </a>
                    <a
                      href="mailto:hello@krib.ng"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <MdAlternateEmail
                        size={25}
                        color="#fff"
                        className="me-3 mb-2"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/krib-ng"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <RiLinkedinFill
                        size={25}
                        color="#fff"
                        className="me-3 mb-2"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/Krib-101665619039926/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <RiFacebookFill
                        size={25}
                        color="#fff"
                        className="me-2 mb-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
}
