import React from "react";
import Navbar from "../../components/Nav";
import HeaderTitle from "../../components/HeaderTitle";
import FAQS from "../../components/FAQS";
import { FaqsData } from "../../Data";

export default function index() {
  return (
    <div>
      <Navbar mode={"1"} />
      <HeaderTitle
        headerTitle={
          <div className="text-center">
            <h1 className="fw-bolder">FAQs</h1>
            <p>Need answers? Find them here....</p>
          </div>
        }
      />
      <FAQS FaqsData={FaqsData} />
    </div>
  );
}
