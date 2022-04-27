import React from "react";
import styled from "styled-components";
import ReactCollapse from "../ReactCollapse";

const Style = styled.div`
  padding: 4rem 0;
  background-color: #f1f1f1;

  @media (min-width: 1200px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 760px !important;
    }
  }
  @media (min-width: 992px) {
    .container,
    .container-lg,
    .container-md,
    .container-sm {
      max-width: 884px !important;
    }
  }
`;

export default function index({ FaqsData }) {
  return (
    <Style>
      <div className="container">
        <div className="px-4">
          {FaqsData.map((item, index) => (
            <ReactCollapse key={index} item={item} />
          ))}
        </div>
      </div>
    </Style>
  );
}
