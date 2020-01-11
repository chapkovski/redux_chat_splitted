import React from "react";
import Paper from "@material-ui/core/Paper";
import TimeStamp from "./timeStamp";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  rootBox: {
    padding: "5px",
    textAlign: "right",
    background: "orange",
    color: "white"
  },
  message: {}
}));

export default function GenericMessage({ message }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container alignItems="flex-end" justify="flex-end">
        <Grid item>
          <Box border={1} borderRadius={16} className={classes.rootBox}>
            {message.text}
          </Box>
        </Grid>
        <Grid item>
          <TimeStamp timestamp={message.timestamp} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
