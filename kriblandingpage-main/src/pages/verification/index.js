import React, { useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../components/Nav";
import Footer from "../../components/Footer";
import { GrCheckmark } from "react-icons/gr";
import { getNotification, getMessage } from "../../components/Notification";

const Style = styled.div`
  .main {
    height: 100vh;
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 900;
  }
`;
export default function Index() {
  useEffect(() => {
    getNotification("danger", "message", "jdjdkjdkj");
  }, []);
  return (
    <Style>
      <NavBar />
      <div className="main">
        <div className="container">
          <div>
            <GrCheckmark size={100} />
          </div>
          <h1>Verification Complete</h1>
          <p>Enjoy our service</p>
        </div>
      </div>
      <Footer padding="8rem 0 3rem 0" />
    </Style>
  );
}
