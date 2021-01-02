import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

interface IData {
  user_id: number;
  group_id: number;
  is_active: boolean;
}

import GroupRecipient from "../models/GroupRecipient";

export default {
  // MORE AND LESS
  async index(request: Request, response: Response) {
    const groupRecipientRepository = getRepository(GroupRecipient);

    // select
    //   g.name as 'group',
    //   u.name
    //   from users_groups ug
    //   join groups g on ug.group_id = g.id
    //   join users u on ug.user_id = u.id

    const groups = await groupRecipientRepository.query(`
    select
    g.id,
    g.name
    from users_groups ug
    join groups g on ug.group_id = g.id
  `);

    const groupId = groups[0].id;

    const users = await groupRecipientRepository.query(`
      select
      u.name
      from users_groups ug
      join users u on ug.user_id = u.id
      where ug.group_id = ${groupId}
    `);

    return response.status(200).json({ groups, users });
  },
  // OKAY
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const groupRecipientRepository = getRepository(GroupRecipient);

    const usersInGroup = await groupRecipientRepository.query(`
    select
    u.name
    from users_groups ug
    join users u on ug.user_id = u.id
    where ug.group_id = ${id}
  `);

    return response.status(200).json(usersInGroup);
  },
  // OKAY
  async join(request: Request, response: Response) {
    const { user_id, group_id, is_active } = request.body;
    const groupRecipientRepository = getRepository(GroupRecipient);

    const data: IData = {
      user_id,
      group_id,
      is_active,
    };

    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      group_id: Yup.number().required(),
      is_active: Yup.boolean().required(),
    });

    try {
      await schema.validate(data, { abortEarly: false, strict: true });
    } catch (error) {
      return response.status(400).send({ message: error.erros });
    }

    const join = groupRecipientRepository.create(data);

    await groupRecipientRepository.save(join);

    return response.status(200).send({ message: "joined" });
  },
  // OKAY
  async leave(request: Request, response: Response) { 
    const { user_id, group_id } = request.params;

    const groupRecipientRepository = getRepository(GroupRecipient);

    const userInGroup = await groupRecipientRepository.query(`
    select
    ug.id as ugID,
    g.name as 'group',
    u.name as user
    from users_groups ug
    join users u on ug.user_id = u.id
    join groups g on ug.group_id = g.id
    where ug.group_id = ${group_id} and ug.user_id = ${user_id}
    LIMIT 1
    `);
    const { ugID } = userInGroup[0];

    await groupRecipientRepository.delete(ugID);

    return response.status(200).send({ message: "leave" });
  },
};
