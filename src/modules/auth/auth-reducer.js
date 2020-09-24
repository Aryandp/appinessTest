

const authReducer = (
  state = {
    loader: false,
    loginRes: {},
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        loader: true,
      };
    case 'LOGIN_FULFILLED':
      return {
        ...state,
        loader: false,
        loginRes: action.payload.data,
      };
    case 'LOGIN_REJECTED':
      return {
        ...state,
        loader: false,
        error: { code: action.payload.response.status, message: action.payload.response.data.error_description },
      };

      case 'GET_USER_DETAILS_PENDING':
      return {
        ...state,
        loader: true,
      };
    case 'GET_USER_DETAILS_FULFILLED':
      return {
        ...state,
        loader: false,
        userProfile: action.payload.data,
      };
    case 'GET_USER_DETAILS_REJECTED':
      return {
        ...state,
        loader: false,
        error: { code: action.payload.response.status, message: action.payload.response.data.error_description },
      };

    default:
      return state;
  }
};

export default authReducer;
