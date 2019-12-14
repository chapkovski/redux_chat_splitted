const history = (state = [], action) => {
  switch (action.type) {
    case "ADD_CHAT_RECORD":
      return [{text:action.text, id:action.id}, ...state];
    case "CLEAR_CHAT":
      return [];
    default:
      return state;
  }
};

export default history;
