import socketIo from "socket.io-client";

const socket = socketIo("http://localhost:3333", { autoConnect: false });

const subscribeToNewDev = (subscribeFunction: Function) => {
  socket.on("welcome", subscribeFunction);
};

const saveMessage = (messageFunction: Function) => {
  socket.on("message", messageFunction);
  //socket.off("receivedMessage", messageFunction);
};

const sendMessage = (message: string, username: string | null | undefined) => {
  socket.emit("sendMessage", { message, username});
};

const connect = () => {
  // socket.io.opts.query = {
  //   username,
  // };
  socket.connect();
};

const disconnect = () => {
  if (socket.connected) socket.disconnect();
};

export { connect, disconnect, subscribeToNewDev, saveMessage, sendMessage };
