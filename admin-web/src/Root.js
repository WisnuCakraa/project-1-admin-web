import React from "react";
import { combineReducers, createStore } from "redux";

const appReducer = combineReducers({
  id: 0,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(rootReducer);

export default () => {
  return {
    store,
  };
};
