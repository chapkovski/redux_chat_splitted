import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ClearIcon from "@material-ui/icons/Clear";
const ChatRecord = ({ text, id, deletion }) => {
  console.log(deletion);
  return (
    <ListItem>
      <ListItemText primary={text} />
      <ClearIcon onClick={()=>deletion(id)} />
    </ListItem>
  );
};

export default ChatRecord;
