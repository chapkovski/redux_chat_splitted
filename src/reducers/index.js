import { combineReducers } from "redux";
import history from "./history";
import form_data from "./form_data";
import modal_status from "./modal";
import { loadState } from "../localStorage";
const appReducer = combineReducers({
  history,
  form_data,
  modal_status
})


const rootReducer = (state, action) => {
  console.log('ACTION', action.type)
  if (action.type === 'LOAD_FROM_STORAGE') {
    state = loadState()
    console.log('STTE:::', state)
  }
  return appReducer(state, action)
}
export default rootReducer;