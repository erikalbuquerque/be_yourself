import { Request, Response } from "express";
import { getRepository } from "typeorm";

import * as Yup from "yup";

import RecentChat from "../models/RecentChat";
import User from "../models/User";
export default {
  async index(request: Request, response: Response) {
    const recentChatRepository = getRepository(RecentChat);

    try {
      const recentChats = await recentChatRepository.find();
      return response.status(200).json(recentChats);
    } catch (error) {
      return response.status(400).json({ message: error.errors });
    }
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;

    let recentChats: object[] = [];

    const recentChatRepository = getRepository(RecentChat);

    const getIdRecipientQuery = `
    select rc.recipient_id 
    from recent_chat rc 
    join users u on rc.user_id = u.id 
    where u.id = ${id}
    `;

    try {
      const getIdSRecipient = await recentChatRepository.query(
        getIdRecipientQuery
      );

      for await (let item of getIdSRecipient) {
        const recipient_id = item.recipient_id;
        const query = `  
        select
        (select u.id from users u join recent_chat rc on rc.recipient_id = u.id where u.id = ${recipient_id}) as recipient_id,
        (select u.name from users u join recent_chat rc on rc.recipient_id = u.id where u.id = ${recipient_id}) as recipient_username,
        (select u.avatar from users u join recent_chat rc on rc.recipient_id = u.id where u.id = ${recipient_id}) as recipient_avatar
        from recent_chat rc
        join users u on rc.user_id = u.id
        where u.id = ${id} and rc.recipient_id = ${recipient_id}
      `;
        const recentChat = await recentChatRepository.query(query);

        recentChats.push(recentChat[0]);
      }
    } catch (error) {
      return response.status(400).json({ message: error.errors });
    }
    return response.status(200).json(recentChats);
  },
  async create(request: Request, response: Response) {
    const { user_id, recipient_id } = request.body;

    const recentChatRepository = getRepository(RecentChat);
    const userRepository = getRepository(User);

    const isUser = await userRepository.findOne({ where: { id: user_id } });
    const isUserRecipient = await userRepository.findOne({
      where: { id: recipient_id },
    });

    const query = `
      select * 
      from recent_chat rc
      where rc.user_id = ${isUser?.id} and rc.recipient_id = ${isUserRecipient?.id}
    `;

    const existRecentChat = await recentChatRepository.query(query);

    if (!(isUser && isUserRecipient))
      return response.status(400).json({ message: "Unexpected error!" });

    if (typeof existRecentChat !== "undefined" && existRecentChat.length > 0)
      return response.status(400).json({ message: "chat already!" });
    const data = {
      user_id,
      recipient_id,
    };

    const schema = Yup.object().shape({
      user_id: Yup.number().required("user_id can't be blank."),
      recipient_id: Yup.number().required("recipient_id can't be blank."),
    });

    const dataRecipient = {
      user_id: recipient_id,
      recipient_id: user_id,
    };

    try {
      await schema.validate(data, { abortEarly: false, strict: true });
      const recentChat = recentChatRepository.create(data);

      const recentChatRecipient = recentChatRepository.create(dataRecipient);

      await recentChatRepository.save(recentChat);
      await recentChatRepository.save(recentChatRecipient);

      return response.status(201).json(recentChat);
    } catch (error) {
      return response.status(400).json({ message: error.errors });
    }
  },
};
