import { combineReducers } from "redux";
import userReducer from "./userReducer";
import flashReducer from './FlashReducer';
import { reducer as form } from "redux-form";

const rootReducer = combineReducers({
  User: userReducer,
  Flash: flashReducer,
  form
});

export default rootReducer;
