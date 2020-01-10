import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { userMessage } from "./chat/structures";
const AllowedFormFields = ["email", "comment"];

const dispatchToForm = (text, setFormInput) => {
  const procstr = text.split(":");
  if (procstr.length === 2) {
    const [input_name, value] = procstr;
    if (AllowedFormFields.includes(input_name)) {
      setFormInput(input_name, value.trim());
    }
  }
};
const AddDeleteRecord = ({ addChatRecord, clearHistory, setFormInput }) => {
  const input = React.useRef(null);
  const enterPressed = e => {
    if (e.key === "Enter") {
      dealWith();
    }
  };
  const dealWith = e => {
    if (input.current.value.trim()) {
      const message = userMessage(input.current.value)
      addChatRecord(message);
    }
    dispatchToForm(input.current.value, setFormInput);
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
