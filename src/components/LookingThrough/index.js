import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const Style = styled.section`
  /* padding: 8rem 0; */

  h4 {
    color: #001d38;
  }
  .card {
    background: #001d38;
    border-radius: 20px;
  }
  .card h5 {
    font-weight: 600;
  }
  .card p {
    line-height: 40px;
    font-weight: 500;
    /* text-align: center; */
  }
  .title {
    width: 80%;
  }
  @media only screen and (max-width: 991px) {
    .title {
      width: 90%;
    }
  }
`;

export default function index() {
  return (
    <Style>
      <div className="container">
        <div className="d-flex justify-content-center mb-5">
          <div className="title">
            <h4 className=" mx-2 mx-md-5 text-center ">
              Looking Through The Lenses Of Property Hunters, We Understand All
              Your Woes.
            </h4>
          </div>
        </div>
        <div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4 mb-3">
              <Card body>
                <div className="text-white py-5 px-2 px-md-2 text-center">
                  <h5 className="mb-4">The Exhausting Search</h5>
                  <p>
                    Think of how you traditionally/ physically hunt for
                    properties, hoping each time that you get the perfect one,
                    waking up another day only to continue the search despite
                    your daily work and other engagement. If those you&#39;ve
                    been coming across are either in bad shape, too expensive,
                    or not in your preferred location, you&#39;ll keep on
                    searching till you settle for an unsatisfactory property.
                    Too much work for a fair result, yeah? Not only is it
                    draining, but you are also at risk of poor mental health.
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-lg-4  mb-3">
              <Card body className="h-100">
                <div className="text-white py-5 px-2 text-center">
                  <h5 className="mb-4">Unregulated Agency Practice</h5>
                  <p>
                    Let&#39;s not forget the exorbitant charges heaped on you by
                    unregistered and fraudulent agents. From costly inspection
                    fees per property, transportation to visit vacant houses to
                    the inconsistent tenancy agreement fee because a particular
                    property is marketed by up to five different agents. You do
                    not want to get caught in this kind of fire lest you get
                    burnt with bankruptcy and huge loans.
                  </p>
                </div>
              </Card>
            </div>
            <div className="col-lg-4  mb-3">
              <Card body className="h-100">
                <div className="text-white py-5 px-4 text-center">
                  <h5 className="mb-4">Fake Documents</h5>
                  <p>
                    Imagine believing a property is yours legally because you
                    paid for it and got documents to prove it&#39;s truly yours
                    but guess what, you find out too late the documents are
                    fake! Then all hell goes loose. You won&#39;t just lose the
                    property but you stand to lose your investment if you
                    can&#39;t get a hold of the dubious agents you made
                    transactions with.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          <div className="text-center">
            <Link href="#form">
              <a className="btn btn-primary px-6 py-3">Get Started</a>
            </Link>
          </div>
        </div>
      </div>
    </Style>
  );
}
