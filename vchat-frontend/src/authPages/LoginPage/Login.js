import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const initialValues = {
    mail: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [Errors, setErrors] = useState({});
  const [Submitting, setSubmitting] = useState(false);

  const { mail, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);

    const userDetails = {
      mail,
      password,
    };
    login(userDetails, navigate);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!values.mail) {
      errors.mail = "mail required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Enter password";
    } else if (values.password.length < 6) {
      errors.password = "max 8 characters required";
    } else if (values.password.length > 12) {
      errors.password = "password doesnot exceed more than 12 characters";
    } else if (!pattern.test(values.password)) {
      errors.password =
        "contain at least one uppercase letter, one number, and one special character";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submitting) {
      console.log(formValues);
    }
  }, [Errors]);

  return (
    <div className="login_main">
      <h3>Login</h3>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="mail"
          value={formValues.mail}
          onChange={handleChange}
          placeholder="Enter E-mail..."
        />
        <p>{Errors.mail}</p>
        <input
          type="password"
          placeholder="Enter Password..."
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{Errors.password}</p>
        <button type="submit">Login</button>
      </form>
      <h5>
        New to Vchat? <Link to="/register">Sign up</Link>
      </h5>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Login);
