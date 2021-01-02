import { Entity, Column, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import Message from "./Message";

@Entity("message_recipient")
export default class MessageRecipient {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    isRead: boolean;

    @Column()
    recipient_id: number;

    @Column()
    message_id: number;

    @ManyToOne(() => Message, message => message.messageRecipient)
    @JoinColumn({ name: "message_id"})
    message: Message;
}