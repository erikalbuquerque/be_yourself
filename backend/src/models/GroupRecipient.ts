import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
  JoinColumn,
} from "typeorm";

import User from "./User";
import Group from "./Group";

@Entity("users_groups")
export default class GroupRecipient {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  user_id: number;

  @ManyToMany(() => User, user => user.groupRecipient)
  @JoinColumn({ name: "user_id"})
  user:User;

  @Column()
  group_id: number;

  @ManyToMany(() => Group, group => group.groupRecipient)
  @JoinColumn({ name: "group_id"})
  group: Group;

  @Column()
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;
}
