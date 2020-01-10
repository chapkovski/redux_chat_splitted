import Botkit from "./botkitConnector";
import { connect } from "react-redux";
import { store } from "../../index";
import { addChatRecord } from "../../actions";
const userId = "123";
const botkitConfig = {
  ws_url: "ws://localhost:3000/",
  msgOnSocketOpen: {
    type: "message",
    user: userId,
    welcomeMessage: true,
    channel: "socket",
    text:'jopa'
  },
  userId: userId
};

export const processMessageIncoming = ({ message }) => {
  // if there is a message from bot, we add record to history
  console.log("message incoming:", message);
  const inmessage = {source:'bot', text:message.text, timestamp:'10:00'}
  // if (message) {
  //   store.dispatch(addChatRecord(message));
  // }
};

export const processMessageOutgoing = message => {
  // if there is an outgoing message we send it to bot
  const outmessage = { user: userId, text: message.text, type: "message" };
  console.log("message outgoing:", outmessage);
  botkit.send(JSON.stringify(outmessage));
};
const botkit = Botkit(
  botkitConfig,
  processMessageIncoming,
  processMessageOutgoing
);
