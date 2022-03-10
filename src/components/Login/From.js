import React, { useState } from "react";

import FormSignup from "../Login/FormSignup";

import FromLogin from "./FromLogin";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn"> × </span>{" "}
        <div className="form-content-left">
          <img className="form-img" src="https://raw.githubusercontent.com/briancodex/react-form-v1/286f4a4603bda257ae001dc57c74d7f30bd4eedb/public/img/img-2.svg" alt="spaceship" />
        </div>{" "}
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FromLogin />}{" "}
      </div>{" "}
    </>
  );
};

export default Form;
