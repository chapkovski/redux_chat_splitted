import React from "react";
import ReactDOM from "react-dom";

import MainForm from "./containers/formcontainer";

// THAT S REDUX:
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import InfoCard from "./components/infocard";
import HistoryContainer from "./containers/historycontainer";
import ChatContainer from "./containers/addchatcontainer";
import { Divider, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  paper: {
    padding: "10px"
  }
}));

const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const initialState = { history: [{ id: 0, text: "jopa" }], form_data:{email:'asdf@asdf.ru'}};
const store = createStore(
  rootReducer,

  // initialState,
  composeEnhancer(applyMiddleware(logger))
);

function App() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <InfoCard/>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <MainForm />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <ChatContainer />
          <HistoryContainer />
        </Paper>
      </Grid>
    </Grid>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
