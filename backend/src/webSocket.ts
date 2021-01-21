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

    socket.on("join", (data: IJoin) => {
      io.to(socket.id).emit(data.room, `${data.userId} joined in the ${data.room}`)
      socket.broadcast.emit(data.room, `${data.userId} joined in the ${data.room}`);

      console.log(`${data.userId} joined in the ${data.room}`)
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
