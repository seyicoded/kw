import React from "react";
import styled from "styled-components";

const Style = styled.section`
  background: #ffffff;
  padding: 8rem 0 3rem 0;
  div {
    padding: 4rem 0 1rem 0;
  }
  @media only screen and (max-width: 568px) {
    div {
      padding: 1rem 8px 0rem 8px;
    }
    @media only screen and (max-width: 768px) {
      h5 {
        font-size: 20px !important;
      }
      h6 {
        font-size: 14px !important;
      }
    }
  }
`;

export default function index({ headerTitle }) {
  return <Style>{headerTitle}</Style>;
}
