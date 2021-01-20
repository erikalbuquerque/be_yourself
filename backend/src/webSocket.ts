import { Socket, Server } from "socket.io";

const connections: object[] = [];
let io: Server;

const setupWebSocket = (server: Server) => {
  io = server;

  io.on("connection", (socket: Socket) => {
    //const username: string = socket.handshake.query.username;
    //io.to(socket.id).emit("welcome", "Conquista Desbloqueada: Nova União");

    socket.on("sendMessage", (data) => {
      io.to(socket.id).emit("message", data);
      socket.broadcast.emit("message", data);
    });
  });
};

// const sendMessage = (to: object[], type: string, data: string) => {
//   to.forEach((connection) => {
//     io.to(to.id).emit(type, data);
//   });
// };

export { setupWebSocket };
