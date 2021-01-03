import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import config from "../config/jwtConfig";

export default {
  checkJwt(request: Request, response: Response, next: NextFunction) {
    const jwttoken = request.headers["authorization"] as string;

    const token = jwttoken.split(" ")[1];

    if(!token) return response.status(401).send({ message: "No token provided"})

    let jwtPayload;

    try {
      jwtPayload = jwt.verify(token, config.jwtSecret);
      response.locals.jwtPayload = jwtPayload
    } catch (error) {
      return response
        .status(401)
        .send({ message: "Failed to authenticate token!" });
    }

    next();

    //The token is valid for 1 hour
    //We want to send a new token on every request
    // const { userId, username } = jwtPayload;
    // const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
    //   expiresIn: "1h",
    // });
    // res.setHeader("token", newToken);
  },
};
