export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setLoginError = (error) => {
  return {
    type: "SET_LOGIN_ERROR",
    payload: error,
  };
};

export const setSignUpError = (error) => {
  return {
    type: "SET_SIGNUP_ERROR",
    payload: error,
  };
};
