import { combineReducers } from "redux";
import {
  evaluateText,
  getAllRelations,
  getSessionId,
  uploadRelations,
} from "./evaluatorReducer";

const reducers = combineReducers({
  evaluateText: evaluateText,
  getSessionId: getSessionId,
  getAllRelations: getAllRelations,
  uploadRelations: uploadRelations,
});

export default reducers;
export type RootReducer = ReturnType<typeof reducers>;
