import { Request, Response } from "express";
import * as Yup from "yup";
import { getRepository } from "typeorm";
import path from "path";

import Image from "../models/Image";
import User from "../models/User";

import usersView from "../views/users_view";

interface IUser {
  id?: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
}

export default {
  // OKAY
  async index(request: Request, response: Response) {
    const userRepository = getRepository(User);

    const users = await userRepository.find();

    return response.status(200).send(usersView.renderMany(users));
  },
  // OKAY
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ where: { id } });

    if (!user) return response.status(400).send({ message: "User not found!" });

    return response.status(201).send(usersView.render(user));
  },
  // OKAY
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const img = request.file as Express.Multer.File;

    const avatar = img.filename;

    const userRepository = getRepository(User);
    const imageRepository = getRepository(Image);

    const userExist = await userRepository.findOne({ where: { name } });

    if (userExist)
      return response.status(400).send({ message: "user already registered!" });

    const data: IUser = {
      name,
      email,
      password,
      avatar,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
      avatar: Yup.string().required(),
    });

    try {
      await schema.validate(data, { abortEarly: false, strict: true });
    } catch (error) {
      return response.status(400).send({ message: error.erros });
    }

    const user = userRepository.create(data);

    await userRepository.save(user);

    const image = imageRepository.create({
      user_id: user.id,
      path: img.path,
    });

    await imageRepository.save(image);

    return response.status(201).json(user);
  },
  // OKAY
  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { name, email, password } = request.body;

    const imageRepository = getRepository(Image);

    const img = request.file as Express.Multer.File;

    const avatar = img.filename;

    const userRepository = getRepository(User);

    const currentAvatar = await imageRepository.findOne({
      where: { user_id: id },
    });

    if (!currentAvatar)
      return response.status(400).send({ message: "avatar not found!" });

    const userExists = await userRepository.findOne({ where: { id } });

    if (!userExists) {
      return response.status(400).send({ message: "User not found!" });
    }

    const data: IUserUpdate = {
      name,
      email,
      password,
      avatar,
    };

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string(),
      avatar: Yup.string(),
    });

    try {
      await schema.validate(data, { abortEarly: false, strict: true });
    } catch (err) {
      return response.status(400).send({ message: err.errors });
    }

    const user = userRepository.merge(userExists, data);

    const image = imageRepository.merge(currentAvatar, {
      user_id: user.id,
      path: img.path,
    });

    await userRepository.save(user);
    await imageRepository.save(image);

    return response.status(201).send(usersView.render(user));
  },
  // OKAY
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({ where: { id } });

    if (!userExists) {
      return response.status(409).send({ message: "User not found!" });
    }

    await userRepository.delete(id);

    return response.status(201).send();
  },
};
