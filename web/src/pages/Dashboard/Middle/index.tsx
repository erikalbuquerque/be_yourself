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
  stop,
} from "../../../services/socketIo";

const COLORS = [
  "#e21400",
  "#91580f",
  "#f8a700",
  "#f78b00",
  "#58dc00",
  "#287b00",
  "#a8f07a",
  "#4ae8c4",
  "#3b88eb",
  "#3824aa",
  "#a700ff",
  "#d300e7",
];

const Middle: React.FC = () => {
  const { user } = useAuth();

  const [isFocus, setIsFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<object[]>([]);

  const [usernameColor, setUsernameColor] = useState("");

  const username = user?.name;

  useEffect(() => {
    connect();
    setUsernameColor(randomColor());
  }, []);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    // disconnect();
    //socket.emit("message", user?.name, message);

    sendMessage(message, username, usernameColor);
    setMessage("");
  }

  function randomColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length) - 1;
    return COLORS[randomIndex];
  }

  useEffect(() => {
    saveMessage((data: {}) => setMessages([...messages, data]));
    return () => stop();
  }, [messages]);

  useEffect(() => {
    var element = document.querySelector(".ref");
    if (element) {
      element.scroll({
        top: element.scrollHeight
      });
    }
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
        <MMessages className="ref">
          {messages.map((item: any, index) => (
            <MItem key={index}>
              <MUserName color={item.color}>{item.username}</MUserName>
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
