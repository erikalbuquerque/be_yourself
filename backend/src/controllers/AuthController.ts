import { Request, Response } from "express";

import jwt from "jsonwebtoken";

import { getRepository } from "typeorm";

import User from "../models/User";

import config from "../config/jwtConfig";

export default {
  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    if (!(email && password)) {
      return response.status(400).send({ message: "Empty values!" });
    }

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { email } });

    if (!user) return response.status(401).send({ message: "User not found!" });

    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };

    const token = jwt.sign(
        data, 
        config.jwtSecret, 
        { expiresIn: "1d" }
    );

    return response.status(201).json({ user, token });
  },
};
