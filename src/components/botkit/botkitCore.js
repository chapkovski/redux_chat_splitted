import Botkit from "./botkitConnector";
import { connect } from "react-redux";
import { addChatRecord } from "../actions";
const botkitConfig = {
  ws_url: "ws://localhost:3000/",
  msgOnSocketOpen: {
    type: "message",
    user: userId,
    welcomeMessage: true,
    channel: "socket",
    user_profile: null
  },
  userId: userId
};

const mapDispatchToProps = dispatch => ({
  addChatRecord: val => dispatch(addChatRecord(val))
});

const _processMessageIncoming = ({ message, addChatRecord }) => {
  // if there is a message from bot, we add record to history
  console.log("message incoming:", message);
  addChatRecord(message);
};
export const processMessageIncoming = connect(
  null,
  mapDispatchToProps
)(_processMessageIncoming);

export const processMessageOutgoing = (message) => {
  // if there is an outgoing message we send it to bot
  
  botkit.send(JSON.stringify(message));
};
const botkit = Botkit(
  botkitConfig,
  processMessageIncoming,
  processMessageOutgoing
);
export default botkit;
