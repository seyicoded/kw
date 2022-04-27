import Image from "next/image";
import styled from "styled-components";
import buyscreenImage4 from "../../Assets/Images/buyscreenImage4.png";
const Style = styled.section`
  h3,
  h5,
  p {
    color: #001d38;
  }
  h5 {
    font-weight: 500;
    line-height: 30px;
  }
  p {
    font-size: 13px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
  }
  img {
    height: 140vh !important;
  }
  .move {
    position: absolute;
    left: 10px;
    padding-bottom: 20rem;
    padding-right: 10px;
    right: -142px;
    background: #e5e5e5;
    z-index: 5000;
  }
  @media only screen and (max-width: 991px) {
    .move {
      position: relative;
      left: 0;
      right: 0;
      padding-bottom: 2rem;
    }
    img {
      height: 80vh !important;
    }
  }
  @media only screen and (max-width: 1199px) {
    img {
      /* width: 80% !important; */
    }
  }
`;
export default function index() {
  return (
    <Style>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div>
              <h3 className="mb-5">
                What Do You <br /> Get With Krib?
              </h3>
              <div>
                <div className="row  position-relative">
                  <div className="col-lg-6 col-xl-6">
                    <div className="mb-3">
                      <h6 className="mb-2">Proper Home Estimate</h6>
                      <p>
                        Krib enables you to purchase any property of interest at
                        its exact worth. No gimmicks.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-2">Tour homes at your convenience</h6>
                      <p>
                        Choose the home that suits you best by scheduling a
                        physical or virtual tour at your convenience.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-2">Customer Support</h6>
                      <p>
                        Our customer support team is very friendly, empathetic,
                        experienced, with valuable insights in real estate
                        markets, ready to help you with different marketing
                        strategies and any other support you need to sell your
                        property.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h6 className="mb-2">Easy and Secured Transaction</h6>
                      <p>
                        Krib allows you to make more transactions with the aid
                        of our secured payment infrastructure that instantly
                        connects with your bank account. Now, you can close
                        contracts, sign and download documents digitally.
                      </p>
                    </div>
                  </div>

                  {/*  */}
                  <div className="col-lg-6 col-lx-6 position-relative">
                    <div className="mb-3">
                      <h6 className="mb-2">Effective Communication</h6>
                      <p>
                        Communicate with your prospective seller or landlord,
                        negotiate pricing and schedule tours.
                      </p>
                    </div>
                    <div className="move">
                      <div className="mb-3">
                        <h6 className="mb-2">Transparent Process</h6>
                        <p>
                          We build a foundation of trust by embracing
                          transparency between buyers/renters and property
                          owners. You are in total control of your transactions,
                          there&#39;s no middleman involved.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-2">
                          Verified and Current Property Listings
                        </h6>
                        <p>
                          Every property listed on Krib is thoroughly verified
                          to ensure true claim of ownership. We update listings
                          quickly and regularly so you can stay ahead of other
                          buyers and find the perfect home on time.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h6 className="mb-2">
                          Save Money on Viewing, Legal, and Agency fees
                        </h6>
                        <p>
                          View listings as much as you want for free. With Krib,
                          you put an end to the money spent on viewing, legal
                          agency and agency fees.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-md-6">
                    
                  </div>

                  <div className="col-md-6">
                   
                  </div>

                  <div className="col-md-6">
                    <h6 className="mb-2">Tour homes at your convenience</h6>
                    <p>
                      Choose the home that suits you best by scheduling a
                      physical or virtual tour at your convenience. .
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="h-100">
              <Image src={buyscreenImage4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
