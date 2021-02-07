import { changeSessionReducer } from "./Reducers/user";
import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";

const appReducer = combineReducers({
  changeSession: changeSessionReducer,
  form: formReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
