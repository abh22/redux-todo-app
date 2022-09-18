import { combineReducers } from "redux";
import todoReducer from "../reducer/todoReducer";
const rootReducer = combineReducers({ todoReducer });
export default rootReducer;