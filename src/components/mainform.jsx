import React from "react";
import TextField from "@material-ui/core/TextField";

import UniField from "./fieldComp";

const MainForm = ({ form_data, logFormChange, setFormInput }) => {
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
      <UniField
        name="age"
        handleInputChange={handleInputChange}
        enterPressed={enterPressed}
        focusLost={focusLost}
        placeholder="18"
        helperText="please enter your age from 18 to 100"
      />
     
     <UniField
        name="income"
        handleInputChange={handleInputChange}
        enterPressed={enterPressed}
        focusLost={focusLost}
        placeholder="10000"
        helperText="please enter how much you earn per month"
      />
       <UniField
        name="name"
        handleInputChange={handleInputChange}
        enterPressed={enterPressed}
        focusLost={focusLost}
        placeholder="Philipp"
        helperText="What is your name?"
      />
       <UniField
        name="PLZ"
        handleInputChange={handleInputChange}
        enterPressed={enterPressed}
        focusLost={focusLost}
        placeholder="8001"
        helperText="PLZ of your address"
      />
    </React.Fragment>
  );
};

export default MainForm;
