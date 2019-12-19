import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { setEmail } from "../actions";
const AddDeleteRecord = ({ addChatRecord, clearHistory, setEmail }) => {
  const input = React.useRef(null);
  const enterPressed = e => {
    if (e.key === "Enter") {
      dealWith();
    }
  };
  const dealWith = e => {
    if (input.current.value.trim()) {
      addChatRecord(input.current.value);
    }
    if (input.current.value.split(":")[0] === "EMAIL") {
      setEmail(input.current.value.split(":")[1]);
    }
    input.current.value = "";
    input.current.focus();
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Enter something here"
        inputRef={input}
        onKeyPress={enterPressed}
      />
      <ButtonGroup aria-label="outlined primary button group">
        <Button color="primary" onClick={dealWith}>
          Send to chat
        </Button>
        <Button color="secondary" onClick={clearHistory}>
          Clear history
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default AddDeleteRecord;
