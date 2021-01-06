import express from "express";
import "./database/connection";
import cors from "cors";

import path from "path";

import { createServer } from "http";
import { Server } from "socket.io";

import routes from "./routes";

const app = express();

const http = createServer(app);

export const io = new Server(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads/", express.static(path.resolve(__dirname, "..", "uploads")));

http.listen(3333, () => console.log("⇌ : server running!"));
