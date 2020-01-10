import React from "react";
// import Rec from "./record";
import Rec from '../containers/singlerec'
import GenericMessage from './chat/genericMessage';
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  
  rootBox: { height: "100%" , padding:"10px"}
}));


const ChatHistory = ({ header=null, history }) => {
  
  const classes = useStyles();
  return (
    <List className={classes.rootBox}>
<h1>{header}</h1>
      {history.map((rec, ind) => (
        <GenericMessage message={rec} key={ind}/>
      ))}
    </List>
  );
};

export default ChatHistory;
