import React from "react";
import ReactDOM from "react-dom";

import MainForm from "./containers/formcontainer";

// THAT S REDUX:
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import HistoryContainer from "./containers/historycontainer";
import ChatContainer from "./containers/addchatcontainer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}


const initialState = { history: [{ id: 0, text: "jopa" }], form_data:{email:'asdf@asdf.ru'}};
const store = createStore(
  rootReducer,
  applyMiddleware(logger),
  // initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ChatContainer />
        <HistoryContainer />
      </Grid>
      <Grid item xs={12}>
        <MainForm />
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
