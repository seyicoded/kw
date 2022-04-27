import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { ImArrowRight2 } from "react-icons/im";
import { getMessage } from "../../components/Notification";
import { vaildForm } from "../../utils/vaildator";
import { HashLink } from "react-router-hash-link";
//
//import buyscreenImage4 from "../../Assets/Images/buyscreenImage5.svg";

const Styled = styled.section`
  .form {
    width: 80%;
  }
  input {
    background: transparent !important;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    font-weight: 500;
    outline: none !important;
    box-shadow: none !important;
  }
  button {
    outline: none !important;
    box-shadow: none !important;
  }
  label {
    font-size: 18px;
    font-weight: 600;
  }
`;
export default function Index({ btnText, mode }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const intialState = {
    regType: mode === "buyer" ? "BUYER" : "SALER",
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    callBackurl: process.env.NEXT_PUBLIC_CALLBACKURL,
    userreferCode: null,
  };

  //state
  const [userData, setUserdata] = useState(intialState);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  //
  const { fullName, emailAddress, contactNumber } = userData;
  //
  useEffect(() => {
    // console.log(message?.success);
    if (message?.success === false) {
      getMessage("danger", "Message", message?.reason);
      setMessage(null);
    }
    if (message?.success) {
      getMessage("success", "Message", message?.message);
      setMessage(null);
      setUserdata(intialState);
    }
  }, [intialState, message]);
  //functions

  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const vaildation = vaildForm(fullName, emailAddress, contactNumber);

    if (vaildation?.success === false)
      return getMessage("danger", "Message", vaildation?.message);

    setLoading(true);
    const reponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}waitlist/join`,
      {
        method: "Post",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await reponse.json();
    setLoading(false);
    //set state to intialstate here
    // console.log(data);
    setMessage(data);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setUserdata({ ...userData, [name]: value });
  };
  // console.log(
  //   userData,
  //   message,
  //   process.env.NEXT_PUBLIC_API_URL,
  //   process.env.NEXT_PUBLIC_CALLBACKURL,
  //   "env"
  // );

  return (
    <Styled>
      <div className="container d-flex justify-content-center" id="form">
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Label className="mb-3">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Decker"
                className=" py-3 py-md-4"
                value={fullName}
                name="fullName"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label className="mb-3"> Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Me@gmail.com"
                className=" py-3 py-md-4"
                value={emailAddress}
                name="emailAddress"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-6" controlId="formBasicPassword">
              <Form.Label className="mb-3">Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="08136503234"
                className=" py-3 py-md-4"
                value={contactNumber}
                name="contactNumber"
                onChange={handleOnChange}
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <button
                className="d-flex align-items-center btn btn-primary py-3 px-4"
                type="submit"
              >
                {!loading ? btnText : "Processing..."}
                <span className="ms-3 ms-md-5">
                  <ImArrowRight2 size={30} />
                </span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Styled>
  );
}

export async function getServerSideProps({ req }) {
  console.log(req.method, req.body);

  return {
    props: {
      name: "smeijer",
    },
  };
}
