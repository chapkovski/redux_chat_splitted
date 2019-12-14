import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ChatRecord = ({ text }) => {
  return (<ListItem>
    <ListItemText primary={text} />
  </ListItem>
  )
};

export default ChatRecord;
