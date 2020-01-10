import { processMessageOutgoing } from "./components/botkit/botkitCore";
const logger = store => next => action => {
  let result = next(action);
  if (action.type === "ADD_CHAT_RECORD" && action.message.source === 'user') {
    processMessageOutgoing(action.message);
  }
  return result;
};

export default logger;
