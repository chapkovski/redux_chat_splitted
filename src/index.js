import React from "react";
import ReactDOM from "react-dom";
import ChatHistory from "./components/chathistory";
import AddRecButton from "./components/addRecord";
// THAT S REDUX:
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import HistoryContainer from "./containers/historycontainer";
import ChatContainer from "./containers/addchatcontainer";
import ClearHistory from "./containers/clearhistorycontainer";

const initialState = { history: [{ id: 0, text: "jopa" }] };
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div>
      <ChatContainer />

      <HistoryContainer />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
