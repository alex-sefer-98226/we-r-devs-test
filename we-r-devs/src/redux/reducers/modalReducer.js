import { OPEN_MODAL, CLOSE_MODAL } from "../constants/modal.js";
const initialState = {
  isOpened: true,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpened: true,
      };
    case CLOSE_MODAL:
      console.log(state);
      return {
        ...state,
        isOpened: false,
      };
    default:
      return state;
  }
}
