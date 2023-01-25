import { combineReducers } from "redux";
import forecast from "./forecast";
import unit from "./unit";

export default combineReducers({
  forecast,
  unit,
});
