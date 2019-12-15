import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
const ChatRecord = ({ text, id, deletion }) => {
  console.log(deletion);
  return (
    <ListItem>
      <ListItemText primary={text} />
      <IconButton color="secondary" aria-label="clear" component="span">
        <ClearIcon onClick={() => deletion(id)} />
      </IconButton>
    </ListItem>
  );
};

export default ChatRecord;
