import socketIo from "socket.io-client";

const socket = socketIo("http://localhost:3333", { autoConnect: false });

const stop = () => {
  socket.removeAllListeners();
};

const subscribeInTheGlobalChat = (subscribeFunction: Function) => {
  socket.on("join", subscribeFunction);
  socket.emit(room, userId);
};

const joinInTheChannel = (room: string, userId: number | null | undefined) => {
  
};

const sendMessage = (
  message: string,
  username: string | null | undefined,
  color: string
) => {
  socket.emit("sendMessage", { message, username, color });
};

const saveMessage = (messageFunction: Function) => {
  socket.on("message", messageFunction);
  //socket.off("receivedMessage", messageFunction);
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

export {
  connect,
  disconnect,
  saveMessage,
  sendMessage,
  stop,
  subscribeInTheGlobalChat,
  joinInTheChannel,
};
