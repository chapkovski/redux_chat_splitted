import React from "react";
import Button from "@material-ui/core/Button";

const ClearHistoryBtn = ({ clearHistoryTrigger }) => {
  return (
    <Button variant="contained" color="secondary" onClick={clearHistoryTrigger}>
      Clear history
    </Button>
  );
};
export default ClearHistoryBtn;
