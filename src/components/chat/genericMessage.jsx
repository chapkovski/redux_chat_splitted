import React from "react";
import Paper from "@material-ui/core/Paper";
import TimeStamp from "./timeStamp";
import BotMessage from "./botMessage";
import UserMessage from "./userMessage";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  rootBox: {
    padding: "5px",
    textAlign: "left",
    background: "blue",
    color: "white"
  },
  message: {}
}));

export default function GenericMessage({ message }) {
  const classes = useStyles();
  console.log('INNER GENERIC', message)
  const MessageContainer = message.source === "user" ? UserMessage : BotMessage;
  return (
    <React.Fragment>
      <MessageContainer message={message}></MessageContainer>
    </React.Fragment>
  );
}
