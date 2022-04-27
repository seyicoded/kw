import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import SellerImage from "../../Assets/Images/seller2.svg";

const Style = styled.section`
  padding: 6rem 0;
  h3 {
    font-weight: 700 !important;
  }
  .dot {
    /* height: 42vh; */
    /* padding: 10
rem
 0; */
    position: absolute;
    left: -150px;
    right: 0;
    background: #e5e5e5;
  }
  p {
    padding: 1rem 0 10px 0;
    line-height: 36px;
  }
  .imageWrapper {
    /* height: 80vh; */
  }
  /* img {
    height: 100vh !important;
  } */
  .row {
    /* overflow: hidden; */
  }
  @media only screen and (max-width: 991px) {
    padding: 1rem 0;
    .dot {
      position: relative;
      left: 0;
      /* height: 15vh; */
    }
    p {
      padding: 0.5rem;
      line-height: 40px;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <div className="container">
        <div className="row g-5 position-relative ">
          <div className="col-lg-7 position-relative">
            <div className="imageWrapper">
              <Image src={SellerImage} alt="" />
            </div>
          </div>
          <div className="col-lg-5 position-relative">
            <div className="imageWrapper">
              <h3 className="pt-4">
                This Is Where <br />
                Krib Comes In!
              </h3>
              <div className="dot">
                <p className="ps-3">
                  Krib bundles verified property listings and capturing,
                  all-in-one transaction flow management, payment, and a
                  documentation system into a simple mobile application for real
                  estate transactions to be concluded simpler and faster. Using
                  Krib app as a property seller doesn&#39;t require tech
                  expertise. Krib is designed to make it very easy to use even
                  for non-tech-savvy sellers.
                </p>
                <div className="text-center">
                  <Link href="#form">
                    <a className="btn btn-primary px-6 py-3">Get Started</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
