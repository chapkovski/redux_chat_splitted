import  { useState } from "react";

function Botkit(config, handleIncoming, handleOutgoing) {
  const [socketConnection, setSocketConnection] = useState(
    new WebSocket(config.ws_url)
  );

  socketConnection.onopen = () => {
    socketConnection.send(JSON.stringify(config.msgOnSocketOpen));
    console.log("Botkit socket open");
  };

  socketConnection.onclose = () => {
    console.log("closed :(");
  };

  socketConnection.onerror = () => {
    console.log("ERROR: cannot connect to botkit");
  };

  socketConnection.onmessage = message => {
    const messageData = JSON.parse(message.data);
    handleIncoming(messageData);
  };

  return socketConnection;
}

export default Botkit;
