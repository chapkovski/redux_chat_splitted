const history = (state = [], action) => {
  switch (action.type) {
    case "ADD_CHAT_RECORD":
      return [action.text, ...state];
    case "CLEAR_CHAT":
      return [];
    default:
      return state;
  }
};

export default history;
