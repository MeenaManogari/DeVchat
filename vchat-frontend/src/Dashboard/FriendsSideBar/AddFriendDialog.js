import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/friendsActions";
import { sendFriendInvitation } from "../../api";

const AddFriendDialog = (props, { closeDialogHandler }) => {
  const initialValues = {
    mail: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [Errors, setErrors] = useState({});
  const [Submitting, setSubmitting] = useState(false);

  // const { mail } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmitting(true);
  };

  const handleSendInvitation = () => {
    //Send friend request to server

    console.log("step1");

    sendFriendInvitation(
      {
        targetMailAddress: formValues.mail,
      },
      handleCloseDialog
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setFormValues("");
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!values.mail) {
      errors.mail = "mail required";
    } else if (!regex.test(values.mail)) {
      errors.mail = "Invalid email format";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(Errors).length === 0 && Submitting) {
      console.log(formValues);
    }
  }, [Errors]);

  return props.trigger ? (
    <div className="addfriend_display">
      <div className="addfriend_main">
        <h5>Invite a Friend</h5>
        <h6>Enter E-mail of your friend</h6>
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            placeholder="enter mail here.."
            name="mail"
            value={formValues.mail}
            onChange={handleChange}
          />
          <p>{Errors.mail}</p>
          <button type="submit" onClick={handleSendInvitation}>
            Send
          </button>
        </form>
        <button onClick={() => props.setTrigger(false)}>close</button>
      </div>
    </div>
  ) : (
    ""
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
