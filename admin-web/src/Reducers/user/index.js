export const changeSessionReducer = (isAUth = false, action) => {
  if (action.type === "IS_AUTHENTICATED") {
    return action.payload;
  }
  return isAUth;
};
