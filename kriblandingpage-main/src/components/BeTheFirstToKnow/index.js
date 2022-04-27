import Image from "next/image";
import styled from "styled-components";

//
import buyscreenImage4 from "../../Assets/Images/buyscreenImage5.svg";

const Styled = styled.section`
  /* padding: 8rem 0; */

  p {
    font-weight: 500;
  }
  .ImageWrapper {
  }
  img {
    width: 70% !important;
  }
`;
export default function index() {
  return (
    <Styled>
      <div className="container">
        <div className="ImageWrapper d-flex justify-content-center mb-4">
          <Image src={buyscreenImage4} alt="" />
        </div>
        <p className="text-center">BE THE FIRST TO KNOW WHEN KRIB LAUNCHES!</p>
      </div>
    </Styled>
  );
}
