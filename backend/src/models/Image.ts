import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import Group from "./Group";
import User from "./User";

@Entity("images")
export default class Image {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column()
  path?: string;

  @Column()
  user_id?: number;

  @OneToOne(() => User, (user) => user.avatar)
  @JoinColumn({ name: "user_id" })
  user?: User;

  @Column()
  group_id?: number;

  @OneToOne(
    () => Group,
    (group) => {
      group.avatar, group.background;
    }
  )
  @JoinColumn({ name: "group_id" })
  group?: Group;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
