import {  saveState } from "./localStorage";
const logger = store => next => action => {
  let result = next(action);
  if (action.type === "ADD_CHAT_RECORD" || action.type === "SET_FORM_INPUT") {
    saveState(store.getState());
  }
  return result;
};

export default logger;