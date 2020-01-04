import React from "react";
import ReactDOM from "react-dom";

import MainForm from "./containers/formcontainer";

// THAT S REDUX:
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import InfoCard from "./components/infocard";
import HistoryContainer from "./containers/historycontainer";
import Modal from "./containers/modal";
import ChatContainer from "./containers/addchatcontainer";
import { Divider, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { loadState, saveState } from "./localStorage";
const useStyles = makeStyles(theme => ({
  paper: {
    padding: "10px"
  }
}));

const logger = store => next => action => {
  let result = next(action);
  if (action.type === "ADD_CHAT_RECORD" || action.type === "SET_FORM_INPUT") {
    saveState(store.getState());
  }
  return result;
};
// const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = {
  // history: [{ id: 0, text: "jopa" }],
  // form_data:{email:'asdf@asdf.ru'},
  modal_status: true
};
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(applyMiddleware(logger))
);
console.log(store);
function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Modal />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InfoCard />
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
    </React.Fragment>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
