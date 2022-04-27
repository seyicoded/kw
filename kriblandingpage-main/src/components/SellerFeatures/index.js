import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import SellerImage from "../../Assets/Images/seller1.svg";

const Style = styled.section`
  padding: 10rem 0;
  .card {
    background: #f1f1f1;
    box-shadow: -5px -5px 10px 3px rgba(0, 0, 0, 0.05),
      5px 5px 10px 3px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
  }
  h5,
  h4 {
    color: #001d38;
    line-height: 30px;
    font-weight: 700 !important;
  }
  p {
    line-height: 35px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
`;
export default function index() {
  return (
    <Style>
      <div className="container">
        <div className="row mb-4">
          <div className=" col-md-6 col-lg-4 mb-3">
            <Card body className="h-100">
              <div className="text-white py-5 px-2 px-md-0 text-center">
                <h5 className="mb-4">The DOM (Days On Market) Syndrome</h5>
                <p>
                  Your property loses value when it stays too long in the market
                  without a buyer. You either lack an effective marketing
                  strategy to get the property to the buyers on time at the
                  right place or the contract close date is delayed for one
                  reason or the other. Bottom line? You need an effective app
                  like Krib.
                </p>
              </div>
            </Card>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <Card body className="h-100">
              <div className="text-white py-5 px-2 px-md-0 text-center">
                <h5 className="mb-4">
                  Perhaps You Find It Overly Expensive To Acquire Buyers For
                  Your Properties?
                </h5>
                <p>
                  Considering how distribution channels in real estate have been
                  majorly offline, it can be quite challenging financially.
                  Common practice is to usually recruit commission agents and
                  leverage traditional media for marketing and advertisements
                  which can be quite expensive. Your ROI may not even cover the
                  extra cost.
                </p>
              </div>
            </Card>
          </div>

          <div className="col-md-6 col-lg-4 mb-3">
            <Card body className="h-100">
              <div className="text-white py-5 px-2 px-md-0 text-center">
                <h5 className="mb-4">
                  What About Choosing The Wrong Agents To Market Your Property?{" "}
                </h5>
                <p>
                  You know you are in deep trouble if the agents you chose to
                  market your property to potential buyers do not understand how
                  the market works. The value of your home depends on how well
                  the agents know the current turns of the market, their
                  experience in evaluating previously sold homes as well as the
                  current ones listed which forms the advice they give for
                  pricing.
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
    </Style>
  );
}
