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
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logger from "./reduxLogger";
const useStyles = makeStyles(theme => ({
  paper: {
    padding: "10px"
  },
  chatcontainer: { height: "100%" }
}));

// const persistedState = loadState();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = {
  // history: [{ id: 0, text: "jopa" }],
  // form_data:{email:'asdf@asdf.ru'},
  modal_status: false
};
export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancer(applyMiddleware(logger))
);

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Modal />

      <Grid
        container
        style={{ minHeight: "100vh" }}
        direction="column"
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <InfoCard />
        </Grid>
        <Grid item xs={12}>
          <Box
            border={1}
            borderRadius={5}
            borderColor={"lightgray"}
            marginTop={1}
            padding={1}
          >
            <MainForm />
          </Box>
        </Grid>
        <Grid item xs={12} style={{ height: "50%" }}>
          <Box
            border={1}
            borderRadius={5}
            borderColor={"lightgray"}
            marginTop={1}
            padding={1}
          >
            <ChatContainer />
            <HistoryContainer />
          </Box>
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
