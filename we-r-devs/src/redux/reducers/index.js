import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import dateReducer from "./dateReducer";

export const rootReducer = combineReducers({
  domain: combineReducers({ selectedDate: dateReducer }),
  ui: combineReducers({ modal: modalReducer }),
});
