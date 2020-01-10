function Botkit(config, handleIncoming, handleOutgoing) {
  const socketConnection = new WebSocket(config.ws_url);
  console.log("HANDLE INCOMING", handleIncoming);
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
    handleIncoming({ message: messageData });
  };

  return socketConnection;
}

export default Botkit;
