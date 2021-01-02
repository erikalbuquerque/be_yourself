import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinColumn,
  OneToOne,
} from "typeorm";

import Image from "./Image";

import GroupRecipient from "./GroupRecipient";

@Entity("groups")
export default class Group {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  avatar: string;

  @Column()
  background: string;

  @ManyToMany(() => GroupRecipient, (groupRecipient) => groupRecipient.group)
  @JoinColumn({ name: "group_id" })
  groupRecipient: GroupRecipient;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
