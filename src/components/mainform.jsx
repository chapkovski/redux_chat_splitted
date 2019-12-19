import React from "react";
import TextField from "@material-ui/core/TextField";

const MainForm = ({ form_data, logFormChange, setFormInput }) => {
  const emailinputref = React.useRef(null);
  const commentInputref = React.useRef(null);
  const focusLost = (input_name, value) => {
    console.log(input_name, ":::", value);
    logFormChange(input_name, value);
  };
  const handleInputChange = e => {
    console.log(e.target.value);
    // setFormInput("EMAIL", e.target.value);
  };
  return (
    <React.Fragment>
      <TextField
        inputRef={emailinputref}
        // onChange={handleInputChange}
        onBlur={e => focusLost("EMAIL", e.target.value)}
        value={form_data.email}
        id="standard-full-width"
        label="Email"
        style={{ margin: 8 }}
        placeholder="chapkovski@gmail.com"
        helperText="Enter email and click enter"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
      {/* <TextField
        inputRef={commentInputref}
        onChange={handleInputChange}
        onBlur={focusLost}
        value={form_data.comment}
        id="standard-full-width"
        label="Comment"
        style={{ margin: 8 }}
        placeholder="Some comment"
        helperText="Enter comment here and click enter"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      /> */}
    </React.Fragment>
  );
};

export default MainForm;
