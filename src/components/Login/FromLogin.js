import React from "react";
import validate from "../Login/validateInfo";
import useForm from "../Login/useFormLogin";
import { Link } from "react-router-dom";
import "./From.css";

const FromLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Login.</h1>
        <div className="form-inputs">
          <label className="form-label">Username</label>
          <input className="form-input" type="text" name="username" placeholder="Enter your username" value={values.username} onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input className="form-input" type="password" name="password" placeholder="Enter your password" value={values.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <Link to="TodoList" style={{ width: "100%", marginLeft: "90px" }}>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
        </Link>
      </form>
    </div>
  );
};

export default FromLogin;
