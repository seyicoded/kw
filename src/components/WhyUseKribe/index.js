import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import styled from "styled-components";
//
import buyscreenImage2 from "../../Assets/Images/animation1.gif";

const Style = styled.section`
  h3 {
    color: #001d38;
    font-weight: 700 !important;
  }
  .card {
    background: #e5e5e5;
    box-shadow: -3px -3px 10px 3px rgba(0, 0, 0, 0.05),
      3px 3px 10px 3px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
  }
  p {
    font-size: 13px;
    line-height: 30px;
    font-weight: 500;
  }
`;
export default function index({ whyuskibru }) {
  return (
    <Style>
      <div className="container">
        <div className="row justify-content-center align-items-center mb-6">
          <div className="col-lg-5">
            <h3>Why Use Krib?</h3>
          </div>
          <div className="col-lg-5">
            <div>
              <Image src={buyscreenImage2} alt="" />
            </div>
          </div>
        </div>

        <div className="row g-2  mb-3">
          {whyuskibru.map((item, index) => (
            <div className="col-md-6 col-lg-4 mb-3" key={index}>
              <Card body className="pt-4 pb-3 px-1 h-100">
                <div>
                  <h6 className="mb-4 text-center">{item.title}</h6>
                  <p className="text-center">{item.desc}</p>
                </div>
              </Card>
            </div>
          ))}
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
