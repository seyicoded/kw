import { getMessage } from "../components/Notification";

export const vaildForm = (name, email, contact) => {
  if (!name || !email || !contact) {
    const result = { message: "All field are required", success: false };
    return result;
  }
  if (!VaildateEmail(email)) {
    console.log("Email is not vaild");
    const result = { message: "Email is not vaild", success: false };
    return result;
  }
};

export const vaildSubscribe = (email) => {
  if (!email) {
    const result = { message: "Email field are required", success: false };
    return result;
  }
  if (!VaildateEmail(email)) {
    console.log("Email is not vaild");
    const result = { message: "Email is not vaild", success: false };
    return result;
  }
};

const VaildateEmail = (email) => {
  const checkEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return checkEmail;
};

// export const vaildLogin = (email, password) => {
//   if (!email || !password) {
//     console.log("All field are required");
//     return "All field are required";
//   }
//   if (!VaildateEmail(email)) {
//     console.log("Email is not vaild");
//     return "Email is not vaild";
//   }
// };
