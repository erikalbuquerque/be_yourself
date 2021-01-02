import express from "express";

import multer from "multer";

import multerConfig from "./config/multer";

import userController from "./controllers/UserController";
import messageController from "./controllers/MessageController";
import groupController from "./controllers/GroupController";
import groupRecipientController from "./controllers/GroupRecipientController";

const routes = express.Router();
const upload = multer(multerConfig);

// USER
routes.get("/users", userController.index);
routes.get("/users/:id", userController.show);
routes.post("/users", upload.single("avatar"), userController.create);
routes.put("/users/:id", upload.single("avatar"), userController.update);
routes.delete("/users/:id", userController.delete);

// MESSAGE
routes.get("/messages", messageController.index);
routes.get("/messages/:id", messageController.show);
routes.post("/messages", messageController.create);
routes.put("/messages/:id", messageController.update);
routes.delete("/messages/:id", messageController.delete);

// Join
routes.get("/groups/members", groupRecipientController.index);
routes.get("/groups/:id/members", groupRecipientController.show);
routes.post("/groups/join", groupRecipientController.join);
routes.delete(
  "/groups/:group_id/user/:user_id",
  groupRecipientController.leave
);

// GROUP
routes.get("/groups", groupController.index);
routes.get("/groups/:id", groupController.show);
routes.post("/groups", upload.array("images", 2), groupController.create);
routes.put("/groups/:id", upload.array("images", 2), groupController.update);
routes.delete("/groups/:id", groupController.delete);

export default routes;
