import _ from "lodash";
const history = (state = [], action) => {
  switch (action.type) {
    case "DEL_CHAT_RECORD":
      const copystate = _.cloneDeep(state);
      return _.filter(copystate, function(o) {
        return o.id !== action.id;
      });
    case "ADD_CHAT_RECORD":
      return [{ text: action.text, id: action.id }, ...state];
    case "CLEAR_CHAT":
      return [];
    default:
      return state;
  }
};

export default history;
