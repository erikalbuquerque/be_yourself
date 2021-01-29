import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany,
  Column,
  CreateDateColumn,
} from "typeorm";

import User from "./User";

@Entity("recent_chat")
export default class RecentChat {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  user_id: number;

  @Column()
  recipient_id: number;

  @OneToMany(() => User, (user) => user.recentChat)
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn()
  created_at: Date;
}
