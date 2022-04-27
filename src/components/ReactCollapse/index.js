import React from "react";
import Collapsible from "react-collapsible";
import styled from "styled-components";
import { TiPlus } from "react-icons/ti";

const STyle = styled.div`
  .Collapsible__trigger div {
    background: #ffffff;
    border-radius: 15px;
    padding: 1rem;
  }
`;
const App = ({ item }) => {
  return (
    <STyle>
      <div className="mb-4">
        <Collapsible
          trigger={
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="mb-0 fw-bold ">{item?.question}</p>{" "}
              <TiPlus color="#000000" size={20} />
            </div>
          }
        >
          <p className="px-4">{item?.answer}</p>
        </Collapsible>
      </div>
    </STyle>
  );
};

export default App;
