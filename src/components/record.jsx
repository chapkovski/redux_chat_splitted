import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
const ChatRecord = ({message, deletion }) => {
  return (
    <ListItem>
      <ListItemText primary={message.text} />
      <IconButton onClick={() => deletion(message.id)} color="secondary" aria-label="clear" component="span">
        <ClearIcon  />
      </IconButton>
    </ListItem>
  );
};

export default ChatRecord;
