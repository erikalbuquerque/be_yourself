import { Request, Response } from "express";
import * as Yup from "yup";
import { getRepository } from "typeorm";

import Message from "../models/Message";
import MessageRecipient from "../models/MessageRecipient";
import User from "../models/User";

interface IMessage {
  body: string;
  user_id: number;
}

interface IMessageUpdate {
  body: string;
}

export default {
  // OKAY
  async index(request: Request, response: Response) {
    const recipientRepository = getRepository(MessageRecipient);

    // Um saco pra fazer isso aqui véi, demorei umas 2 hrs
    const messages = await recipientRepository
      .createQueryBuilder("mr")
      .innerJoin("messages", "m")
      .innerJoin("users", "u")
      .where("mr.message_id == m.id and m.user_id == u.id")
      .select(
        `
          u.name as 'to',
          m.id as messageId,
          m.body as body,
          mr.isRead,
          m.created_at as 'date'
        `
      )
      .addSelect((subQuery) => {
        return subQuery
          .select("u.name", "'from'")
          .from("users", "u")
          .where("u.id == mr.recipient_id");
      }, "from")
      .execute();

    return response.status(200).json(messages);
  },
  // OKAY
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const messageRepository = getRepository(Message);

    const messageExist = await messageRepository.findOne({ where: { id } });

    if (!messageExist)
      return response.status(400).send({ message: "Message not found!" });

    return response.status(200).json(messageExist);
  },
  // OKAY
  async create(request: Request, response: Response) {
    const { body, user_id, recipient_id } = request.body;

    const messageRepository = getRepository(Message);

    const recipientRepository = getRepository(MessageRecipient);

    const data: IMessage = {
      body,
      user_id,
    };

    const schema = Yup.object().shape({
      body: Yup.string().required(),
      user_id: Yup.number().required(),
    });

    try {
      await schema.validate(data, { abortEarly: false, strict: true });
    } catch (error) {
      return response.status(400).send({ message: error.errors });
    }

    const message = messageRepository.create(data);

    const message_id = await messageRepository
      .save(message)
      .then((message) => message.id);

    const messageRecipient = recipientRepository.create({
      recipient_id,
      message_id,
      isRead: false,
    });

    await recipientRepository.save(messageRecipient);

    return response.status(201).json({ message, messageRecipient });
  },
  // OKAY
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { body } = request.body;

    const messageRepository = getRepository(Message);

    const messageExist = await messageRepository.findOne({ where: { id } });

    if (!messageExist)
      return response.status(400).send({ message: "Message not found!" });

    const data: IMessageUpdate = {
      body,
    };
    const schema = Yup.object().shape({
      body: Yup.string().required(),
    });

    try {
      await schema.validate(data, { abortEarly: false, strict: true });
    } catch (error) {
      return response.status(400).send({ message: error.errors });
    }

    const messageUpdated = messageRepository.merge(messageExist, data);

    await messageRepository.save(messageUpdated);

    return response.status(200).json(messageUpdated);
  },
  // OKAY
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const messageRepository = getRepository(Message);

    const messageExist = await messageRepository.findOne({ where: { id } });

    if (!messageExist)
      return response.status(400).send({ message: "Message not found!" });

    await messageRepository.delete(id);

    return response.status(200).send();
  },
};
