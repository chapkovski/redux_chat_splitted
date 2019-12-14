export const clearHistory = () => ({ type: "CLEAR_CHAT" });
export const addChatRecord = text => ({
  type: "ADD_CHAT_RECORD",
  text
});
