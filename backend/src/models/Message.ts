import { Entity, Column, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import User from "./User";
import MessageRecipient from "./MessageRecipient";

@Entity("messages")
export default class Message {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    body: string;

    @Column()
    user_id: number;

    @ManyToOne(() => User, user => user.message)
    @JoinColumn({ name: "user_id"})
    user: User;

    @OneToMany(() => MessageRecipient, messageRecipient => messageRecipient.message)
    @JoinColumn({ name: "message_id"})
    messageRecipient: MessageRecipient;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}