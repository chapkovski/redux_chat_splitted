import React from "react";
import TextField from "@material-ui/core/TextField";

const MainForm = ({ form_data, logFormChange, setFormInput }) => {
  const emailinputref = React.useRef(null);
  const commentInputref = React.useRef(null);
  const enterPressed = e => {
    const input_name = e.target.name;
    const value = e.target.value;
    if (value.trim()) {
    setFormInput(input_name, value);
    if (e.key === "Enter") {
      logFormChange(input_name, value);
    }
  }
  };
  const focusLost = (input_name, value) => {
    if (value.trim()) {
      setFormInput(input_name, value);
      logFormChange(input_name, value);
    }
  };
  const handleInputChange = (input_name, value) => {
    setFormInput(input_name, value);
  };
  return (
    <React.Fragment>
      <TextField
        inputRef={emailinputref}
        name="email"
        onKeyPress={enterPressed}
        onChange={e => handleInputChange("email", e.target.value)}
        onBlur={e => focusLost("email", e.target.value)}
        value={form_data.email}
        id="standard-full-width"
        label="email"
        style={{ margin: 8 }}
        placeholder="chapkovski@gmail.com"
        helperText="Enter email and click enter"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        inputRef={commentInputref}
        name="comment"
        onChange={e => handleInputChange("comment", e.target.value)}
        onKeyPress={enterPressed}
        onBlur={e => focusLost("comment", e.target.value)}
        value={form_data.comment}
        id="standard-full-width"
        label="comment"
        style={{ margin: 8 }}
        placeholder="Some comment"
        helperText="Enter comment here and click enter"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </React.Fragment>
  );
};

export default MainForm;
