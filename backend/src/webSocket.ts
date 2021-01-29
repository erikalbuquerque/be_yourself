import { Socket, Server } from "socket.io";

const connections: object[] = [];
let io: Server;

interface IJoin{
  room: string;
  userId: number;
}

const setupWebSocket = (server: Server) => {
  io = server;

  io.on("connection", (socket: Socket) => {
    //const username: string = socket.handshake.query.username;
    //io.to(socket.id).emit("welcome", "Conquista Desbloqueada: Nova União");

    socket.on("join", (username: string) => {
      io.to(socket.id).emit("global", `${username} joined in the global`)
      socket.broadcast.emit("global", `${username} joined in the global`);

      console.log(`${username} joined in the global`)

      socket.on("disconnect", () => {
        console.log(`${username} has left global`);
      })
    })

    socket.on("sendMessage", (data: {}) => {
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
