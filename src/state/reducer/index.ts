import { combineReducers } from "redux";
import { evaluateText } from "./evaluatorReducer";

const reducers = combineReducers({
  evaluateText: evaluateText,
});

export default reducers;
