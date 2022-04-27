import React from "react";
import Navbar from "../../components/Nav";
import BuyerHeader from "../../components/BuyerHeader";
import LookingThrough from "../../components/LookingThrough";
import TwoSide from "../../components/TwoSide";
import WhatDoYouGet from "../../components/WhatDoYouGet";
import BeTheFirstToKnow from "../../components/BeTheFirstToKnow";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

//import buyscreenImage2 from "../../Assets/Images/animation1.gif";
import buyscreenImage2 from "../../Assets/Images/animation1.gif";
import buyscreenImage3 from "../../Assets/Images/buyscreenImage3.svg";
import Link from "next/link";

export default function index() {
  return (
    <div style={{ backgroundColor: " #e5e5e5", overflow: "hidden" }}>
      <Navbar Background={"#000"} />
      <BuyerHeader />
      <LookingThrough />
      <TwoSide
        order
        text={
          <div>
            <h3 className="mb-4">The Big Question? </h3>
            <p>
              In a digitized world where software and artificial intelligence
              tools are ruling, how can real estate transactions be automated?
            </p>
          </div>
        }
        ImageComp={buyscreenImage2}
      />
      <TwoSide
        order1
        text={
          <div>
            <h3 className="mb-4">With Krib! </h3>
            <p className="mb-3">
              The perfect solution to end all your problems on property hunting.
              An all-in-one transaction and documentation system with thoroughly
              verified property listings. Exactly what you need. Krib makes
              buying, and renting a home easy, certain, and fast by simplifying
              the process of property acquisition in Nigeria with a mobile app.
            </p>
            <div className="text-center">
              <Link href="#form">
                <a className="btn btn-primary px-6 py-3">Get Started</a>
              </Link>
            </div>
          </div>
        }
        ImageComp={buyscreenImage3}
      />
      <WhatDoYouGet />
      <BeTheFirstToKnow />
      <Form btnText={"GET EARLY ACCESS"} mode="buyer" />
      <Footer padding="10rem 0 3rem 0" />
      {/* <div>hello</div> */}
    </div>
  );
}
