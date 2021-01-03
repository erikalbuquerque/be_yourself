import express from "express";
import "./database/connection";

import cors from "cors";
import path from "path";

import { createServer } from "http";
import { Server, Socket } from "socket.io";

import routes from "./routes";

const app = express();
const http = createServer(app);
const io = new Server(http);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads/", express.static(path.resolve(__dirname, "..", "uploads")));

io.on("connection", (socket: Socket) => {
  console.log("↱ : client connected!");
});

http.listen(3333, () => console.log("⇌ : server running!"));
