import React, { FormEvent, useEffect, useState } from "react";

import {
  Content,
  MHeader,
  MBack,
  MTitle,
  MInfo,
  MBody,
  MMessages,
  MItem,
  MUserName,
  MTwoDots,
  MUserMessage,
  MFooter,
  MInput,
  MEmoji,
} from "./styles";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import iconInfo from "../../../assets/info.svg";
import iconEmoji from "../../../assets/emoji.svg";

import api from "../../../services/api";
import { useAuth } from "../../../context/Auth";
import {
  saveMessage,
  sendMessage,
  connect,
  disconnect,
} from "../../../services/socketIo";

interface IMessage {
  username: string;
  text: string;
}

const Middle: React.FC = () => {
  const { user } = useAuth();

  const [isFocus, setIsFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<object[]>([]);

  const username = user?.name;

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    // disconnect();
    //socket.emit("message", user?.name, message);
    sendMessage(message, username);
    setMessage("");
  }

  useEffect(() => {
    connect();
    saveMessage((data: {}) => setMessages([...messages, data]));
    return () => disconnect();
  }, [messages]);

  return (
    <Content>
      <MHeader>
        <MBack>
          <HiOutlineArrowNarrowLeft size={25} color="#e0e0e0" />
        </MBack>
        <MTitle>Master</MTitle>
        <MInfo src={iconInfo} />
      </MHeader>
      <MBody>
        <MMessages>
          {messages.map((item: any, index) => (
            <MItem key={index}>
              <MUserName color="#ff0">{item.username}</MUserName>
              <MTwoDots>:</MTwoDots>
              <MUserMessage>{item.message}</MUserMessage>
            </MItem>
          ))}
        </MMessages>
      </MBody>
      <form onSubmit={(e) => handleSendMessage(e)}>
        <MFooter focus={isFocus}>
          <MInput
            value={message}
            placeholder="Send a message"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setMessage(e.target.value)}
          />
          <MEmoji src={iconEmoji} />
        </MFooter>
      </form>
    </Content>
  );
};
export default Middle;
