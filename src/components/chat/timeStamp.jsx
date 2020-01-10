import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  rootBox: {height:"100%",   },
  inner:{textAlign:'center', padding:"5px", margin:"5px"}
  
  
}));

export default function TimeStamp({ timestamp }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box border={1} borderRadius={16} className={classes.rootBox} fontSize={10}>
        <Grid container   justify="center"  direction="column"
  alignItems="center">
          <Grid item className={classes.inner}>{timestamp}</Grid>
        </Grid>
        
      </Box>
    </React.Fragment>
  );
}
