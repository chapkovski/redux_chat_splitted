import Botkit from "./botkitConnector";
import { connect } from "react-redux";
import moment from "moment";
import { store } from "../../index";
import { addChatRecord, setFormInput } from "../../actions";
import { botMessage } from "../chat/structures";
const userId = "123";
const botkitConfig = {
  ws_url: "ws://localhost:3000/",
  msgOnSocketOpen: {
    type: "message",
    user: userId,
    welcomeMessage: true,
    channel: "socket",
  },
  userId: userId
};

export const processMessageIncoming = ({ message }) => {
  console.log('RAW:',message)
  // if there is a message from bot, we add record to history
  const inmessage = botMessage(message.text);

  if (message) {
    store.dispatch(addChatRecord(inmessage));
  }
  if (message.set_form_field) {
    console.log('GONNA CHANGE FORM FIELD')
    store.dispatch(setFormInput(message.form_field_name, message.form_field_value));
  }
};

export const processMessageOutgoing = message => {
  // if there is an outgoing message we send it to bot
  const outmessage = { user: userId,  type: "message" , ...message};
  botkit.send(JSON.stringify(outmessage));
};
const botkit = Botkit(
  botkitConfig,
  processMessageIncoming,
  processMessageOutgoing
);
