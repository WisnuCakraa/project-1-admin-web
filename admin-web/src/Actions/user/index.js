export const changeUserSession = (isAuthenticated) => {
  return {
    type: "IS_AUTHENTICATED",
    payload: isAuthenticated,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
