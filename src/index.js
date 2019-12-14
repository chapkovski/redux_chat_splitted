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
const initialState = {history:['x','y']}
const store = createStore(rootReducer, initialState);

function App() {
  const [history, setHistory] = React.useState(["a", "b"]);
  const clickHandler = val => {
    setHistory(state => [val, ...state]);
  };
  return (
    <div>
      <ChatContainer />
      <ClearHistory></ClearHistory>
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
