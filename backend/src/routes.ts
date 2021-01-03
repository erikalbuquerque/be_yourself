import express from "express";

import multer from "multer";

import multerConfig from "./config/multer";

import authController from "./controllers/AuthController";

import userController from "./controllers/UserController";
import messageController from "./controllers/MessageController";
import groupController from "./controllers/GroupController";
import groupRecipientController from "./controllers/GroupRecipientController";

import middlewareJwt from "./middlewares/checkJwt";

const routes = express.Router();
const upload = multer(multerConfig);

/// AUTHENTICATE

routes.post("/auth/login", authController.login);

// USER
routes.get("/users", userController.index);
routes.get("/users/:id", userController.show);
routes.post("/users", upload.single("avatar"), userController.create);
routes.put(
  "/users/:id",
  middlewareJwt.checkJwt,
  upload.single("avatar"),
  userController.update
);
routes.delete("/users/:id", middlewareJwt.checkJwt, userController.delete);

// MESSAGE
routes.get("/messages", messageController.index);
routes.get("/messages/:id", middlewareJwt.checkJwt, messageController.show);
routes.post("/messages", middlewareJwt.checkJwt, messageController.create);
routes.put("/messages/:id", middlewareJwt.checkJwt, messageController.update);
routes.delete(
  "/messages/:id",
  middlewareJwt.checkJwt,
  messageController.delete
);

// Join
routes.get("/groups/members", groupRecipientController.index);
routes.get("/groups/:id/members", groupRecipientController.show);
routes.post(
  "/groups/join",
  middlewareJwt.checkJwt,
  groupRecipientController.join
);
routes.delete(
  "/groups/:group_id/user/:user_id",
  middlewareJwt.checkJwt,
  groupRecipientController.leave
);

// GROUP
routes.get("/groups", groupController.index);
routes.get("/groups/:id", groupController.show);
routes.post(
  "/groups",
  middlewareJwt.checkJwt,
  upload.array("images", 2),
  groupController.create
);
routes.put(
  "/groups/:id",
  middlewareJwt.checkJwt,
  upload.array("images", 2),
  groupController.update
);
routes.delete("/groups/:id", middlewareJwt.checkJwt, groupController.delete);

export default routes;
