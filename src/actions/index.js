let chatId = 0;

export const setFormInput = (input_name, val) => ({
  type: "SET_FORM_INPUT",
  input_name: input_name,
  value: val
});

export const delItem = id => ({ type: "DEL_CHAT_RECORD", id: id });
export const clearHistory = () => ({ type: "CLEAR_CHAT" });
export const addChatRecord = text => ({
  type: "ADD_CHAT_RECORD",
  id: chatId++,
  text
});
