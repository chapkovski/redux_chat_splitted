import React from "react";
import TextField from "@material-ui/core/TextField";
import { store } from "../index";
const UniField = ({
  name,
  handleInputChange,
  enterPressed,
  focusLost,
  placeholder,
  helperText
}) => {
  const value = store.getState().form_data[name];
  return (
    <TextField
      name={name}
      onChange={e => handleInputChange(name, e.target.value)}
      onKeyPress={enterPressed}
      onBlur={e => focusLost(name, e.target.value)}
      value={value}
      id="standard-full-width"
      label={name}
      style={{ margin: 8 }}
      placeholder={placeholder || ""}
      helperText={helperText || ""}
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default UniField;
