import React from "react";
import Navbar from "../../components/Nav";
import HeaderTitle from "../../components/HeaderTitle";
import Terms from "../../new_components/Terms";
import { RiCloseLine } from "react-icons/ri";
export default function index() {
  return (
    <div>
      <Navbar mode={"1"} />
      <HeaderTitle
        headerTitle={
          <div className="container">
            <div className="d-flex align-items-center">
              <i className="me-5">
                <RiCloseLine size={30} />
              </i>{" "}
              <h1 className="fw-bolder">Terms Of Service</h1>
            </div>
          </div>
        }
      />
      <Terms />
    </div>
  );
}
