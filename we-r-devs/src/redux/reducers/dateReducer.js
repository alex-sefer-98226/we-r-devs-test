import { SET_DATE } from "../constants/modal";

const initialState = new Date();

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATE:
      return action.payload;
    default:
      return state;
  }
}
