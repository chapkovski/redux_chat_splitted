import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddRecord = ({ clickHandler }) => {
  const input = React.useRef(null);
  const enterPressed = e => {
    if (e.key === "Enter") {
      dealWith();
    }
  };
  const dealWith = e => {
    if (input.current.value.trim()) {
      clickHandler(input.current.value);
    }
    input.current.value = "";
    input.current.focus();
  };

  return (
    <div>
      <TextField id="standard-basic" label="Enter something here" inputRef={input} onKeyPress={enterPressed}/>
      <Button variant="contained" color="primary" onClick={dealWith}>
        Send to chat
      </Button>
    </div>
  );
};
export default AddRecord;
