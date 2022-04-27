import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import buyscreenImage from "../../Assets/Images/buyscreenImage.svg";
const Style = styled.section`
  padding: 0 !important;

  .row,
  .px {
    overflow: hidden;
  }
  p {
    line-height: 45px;
  }

  h3 {
    line-height: 65px;
    color: #001d38;
  }
  .row .box {
    padding: 15rem 0 11rem 0;
  }
  .box1 {
    padding: 8rem 0 2rem 0;
    height: 100%;
  }
  .col-lg-7 .box1 {
    background: #001d38;
  }
  .imageWrapper {
    position: absolute;
    bottom: -2rem;
    right: -200px;
  }
  img {
    border-radius: 30px;
  }
  @media only screen and (max-width: 991px) {
    .col-lg-7 .box,
    .box1 {
      height: 90vh !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .col-lg-7 .box,
    .box1 {
      height: 60vh !important;
    }
    img {
      /* width: 60% !important; */
    }
    h3 {
      line-height: 50px;
    }
    .box1 {
      padding: 8rem 0 2rem 0;
    }
    .imageWrapper {
      position: absolute;
      right: 0;
    }
  }
  @media only screen and (max-width: 500px) {
    .col-lg-7 .box {
      height: 40vh !important;
    }
  }
`;
export default function index() {
  return (
    <Style>
      <div className="px pb-5 position-relative">
        <div className="row ">
          <div className=" col-lg-5 box">
            <div className=" ps-6 pe-6 ">
              <h3 className="mb-3">
                Secure Verified <br />
                Properties Easy
                <br />
                And Fast
              </h3>
              <p className="mb-3">
                House hunting is about to get seamless and stress-free! <br />
                When it comes to house hunting in Nigeria, you don&#39;t just
                get headaches over it. Migraines come knocking hard! Then comes
                frustration, despair, and even bitterness. Securing a property
                or an accommodation is never for the faint-hearted in Nigeria.
              </p>
              <div className="text-center">
                <Link href="#form">
                  <a className="btn btn-primary px-6 py-3">Get Started</a>
                </Link>
              </div>
            </div>
          </div>

          <div className=" col-lg-7 ">
            <div className="box1 ms-xl-5">
              <div className="imageWrapper">
                <Image src={buyscreenImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
