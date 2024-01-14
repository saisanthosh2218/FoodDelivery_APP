const initialState = {
  user: null,
  errors: {
    signUpError: "",
    loginError: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        errors: {
          ...state.errors,
          signUpError: "",
        },
      };
    case "SET_SIGNUP_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          signUpError: action.payload,
        },
      };
    case "SET_LOGIN_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          loginError: action.payload,
        },
      };
    default:
      return state;
  }
};
export default authReducer;
