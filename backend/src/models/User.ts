import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  OneToMany,
  JoinColumn,
} from "typeorm";
import bcrypt from "bcrypt";

import Message from "./Message";
import GroupRecipient from "./GroupRecipient";
import RecentChat from "./RecentChat";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  tempPassword: string;

  @AfterLoad()
  loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    if (this.tempPassword !== this.password) {
      this.password = bcrypt.hashSync(this.password, 8);
    }
  }

  @Column()
  avatar: string;

  @OneToMany(() => Message, (message) => message.user)
  @JoinColumn({ name: "user_id" })
  message: Message;

  @ManyToMany(() => GroupRecipient, (groupRecipient) => groupRecipient.user) // esse nome ta errado '-' "AdmGroup"
  @JoinColumn({ name: "user_id" })
  groupRecipient: GroupRecipient;

  @ManyToMany(() => RecentChat, (recentChat) => recentChat.user)
  @JoinColumn({ name: "user_id" })
  recentChat: RecentChat;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
