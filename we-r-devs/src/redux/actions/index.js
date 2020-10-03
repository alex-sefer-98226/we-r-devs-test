import { CLOSE_MODAL, OPEN_MODAL, SET_DATE } from "../constants/modal";

export const openModal = () => {
  return { type: OPEN_MODAL };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
export const setDate = (payload) => ({ type: SET_DATE, payload });
