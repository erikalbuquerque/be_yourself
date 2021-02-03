import { Socket, Server } from "socket.io";

const connections: object[] = [];
let io: Server;

interface IJoin {
  room: string;
  userId: number;
}

const setupWebSocket = (server: Server) => {
  io = server;

  io.on("connection", (socket: Socket) => {
    //const username: string = socket.handshake.query.username;
    //io.to(socket.id).emit("welcome", "Conquista Desbloqueada: Nova União");

    socket.on("join", (room: string, username: string | null | undefined) => {
      io.to(socket.id).emit(`${room}`, `${username} joined in the ${room}`);
      socket.broadcast.emit(`${room}`, `${username} joined in the ${room}`);

      console.log(`${username} joined in the ${room}`);

      socket.on("disconnect", () => {
        console.log(`${username} has left ${room}`);
      });
    });

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
