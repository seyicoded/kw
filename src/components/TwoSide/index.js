import Image from "next/image";
import React from "react";
import styled from "styled-components";
//
import buyscreenImage2 from "../../Assets/Images/animation1.gif";

const Style = styled.section`
  /* padding: 8rem 0; */

  p {
    line-height: 35px;
    font-weight: 500;
  }
  h3 {
    font-weight: 700 !important;
  }
  img {
    width: 95% !important;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export default function index({ ImageComp, text, order, order1 }) {
  return (
    <Style>
      <div className="container">
        <div className="row g-5 justify-content-center align-items-center">
          <div className={`col-md-7`}>
            {" "}
            {order ? text : <Image src={ImageComp} alt="" />}
          </div>
          <div className={`col-md-5`}>
            <div>{order ? <Image src={ImageComp} alt="" /> : text}</div>
          </div>
        </div>
      </div>
    </Style>
  );
}
