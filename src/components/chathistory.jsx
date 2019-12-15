import React from "react";
// import Rec from "./record";
import Rec from '../containers/singlerec'
import List from "@material-ui/core/List";
const ChatHistory = ({ header=null, history }) => {
  
  return (
    <List>
<h1>{header}</h1>
      {history.map((rec, ind) => (
        <Rec text={rec.text} id={rec.id}  key={ind}/>
      ))}
    </List>
  );
};

export default ChatHistory;
