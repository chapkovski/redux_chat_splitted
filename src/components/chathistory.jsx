import React from "react";
import Container from "@material-ui/core/Container";
import Rec from "./record";
import List from "@material-ui/core/List";
const ChatHistory = ({ history }) => {
  
  return (
    <List>
      {history.map((rec, ind) => (
        <Rec text={rec.text}  key={ind}/>
      ))}
    </List>
  );
};

export default ChatHistory;
