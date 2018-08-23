import { combineReducers } from "redux";
// import userReducer from "./userReducer";
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  // User: userReducer,
  form
});

export default rootReducer;
