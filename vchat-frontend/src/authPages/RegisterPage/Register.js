import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import "./Register.css";

const Register = ({ register }) => {
  //Defining navigation for dashboard
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    mail: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [Errors, setErrors] = useState({});
  const [Submitting, setSubmitting] = useState(false);

  const { username, mail, password } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
    const userDetails = {
      username,
      mail,
      password,
    };
    register(userDetails, navigate);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!values.username) {
      errors.username = "Name required";
    } else if (values.username.length < 3) {
      errors.username = "need more than 3 characters";
    } else if (values.username.length > 12) {
      errors.username = "character must not exceed 12";
    }

    if (!values.mail) {
      errors.mail = "mail required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Enter password";
    } else if (values.password.length < 8) {
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
    <div className="register_main">
      <h3>Register</h3>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        />
        <p>{Errors.username}</p>
        <input
          type="email"
          placeholder="E-mail"
          name="mail"
          value={formValues.mail}
          onChange={handleChange}
        />
        <p>{Errors.mail}</p>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{Errors.password}</p>
        <button type="submit">Register</button>
      </form>
      <h5>
        Existsing User? <Link to="/login">Sign in</Link>{" "}
      </h5>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Register);
