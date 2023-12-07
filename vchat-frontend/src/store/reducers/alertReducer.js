import alertActions from "../actions/alertActions";

const initState = {
  showAlertMessages: false,
  alertMessageContent: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessages: true,
        alertMessageContent: action.content,
      };

    case alertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessages: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};
export default reducer;
