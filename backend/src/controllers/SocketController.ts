import { Request, Response } from "express";
import { io } from "../server";
import { Socket } from "socket.io";

export default {
  index(request: Request, response: Response) {
    io.on("connection", (socket: Socket) => {
      socket.on("/", () => {
        console.log(`↱ : ${socket.id} connected`);
        
        return response
          .status(200)
          .send({ message: `↱ : ${socket.id} connected` });
      });
    });

    // io.on("disconnect", (socket: Socket) => {
    //   socket.on("leave", () => {
    //     console.log(`↲ : ${socket.id} disconnected`);
    //   });
    // });
  },
};
