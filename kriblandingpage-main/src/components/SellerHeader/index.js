import Image from "next/image";
import styled from "styled-components";
import SellerImage from "../../Assets/Images/seller1.png";
import { Card } from "react-bootstrap";
const Style = styled.div`
  /* height: 80vh; */
  background: url(${"https://res.cloudinary.com/dammymoses/image/upload/v1641264695/kibrc/sellerBackground_uy9plp.svg"});
  position: relative;
  .deals {
    margin: 0 auto;
    position: absolute;
    bottom: -120px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .card {
    width: 30%;
    box-shadow: -3px -3px 10px 3px rgba(0, 0, 0, 0.05),
      3px 3px 10px 3px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
  }
  @media only screen and (max-width: 991px) {
    .card {
      width: 50%;
    }
  }
  @media only screen and (max-width: 768px) {
    .card {
      width: 90%;
    }
  }
  .card-body {
    text-align: center;
    line-height: 43px;
    font-weight: 500;
    color: #001d38;
  }
`;

export default function index() {
  return (
    <Style>
      <div className="seller d-flex align-items-center text-white">
        <div className="container">
          <h3>
            Attract Quality Buyers <br />
            And Tenants Online
            <br />
            With a Few Clicks
          </h3>
        </div>
      </div>
      <div className="deals">
        <Card body>
          <div className="px-1 px-md-3 text-center">
            <p>
              {" "}
              Here&#39;s why you are not closing deals as a property
              developer/owner/seller thereby losing the opportunity to scale in
              real estate.
            </p>
          </div>
        </Card>
      </div>
    </Style>
  );
}
