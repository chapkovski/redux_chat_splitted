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
    console.log("GOTMESSAGE!", message);
    const messageData = JSON.parse(message.data);
    console.log('MESSAGE DATA', messageData)
    handleIncoming({message:messageData});
  };

  return socketConnection;
}

export default Botkit;
