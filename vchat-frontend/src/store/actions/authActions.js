import * as api from "../../api";
//import { openAlertMessage } from "./alertActions";

export const authActions = {
  SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};
//For the flow of action
export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};
//login actions
const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.login(userDetails);
    console.log(response);
    if (response.error) {
      //Error alert message
      //dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const userDetails = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate("/");
    }
  };
};

//Register Actions
const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await api.register(userDetails);
    console.log(response);
    if (response.error) {
      //Error alert message
    } else {
      const userDetails = response?.data;
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate("/");
    }
  };
};