import React, { FormEvent, useEffect, useState, Fragment } from "react";

import {
  Content,
  MHeader,
  MBack,
  MTitle,
  MInfo,
  MBody,
  MMessages,
  // Card User
  MCardUser,
  MCardHeader,
  MCardAvatar,
  MCardTexts,
  MCardUserName,
  MWhisper,
  MWhisperTitle,
  // ........
  MItem,
  MUserName,
  MTwoDots,
  MUserMessage,
  MFooter,
  MInput,
  MContentEmoji,
  MEContainerEmoji,
  MEmoji,
} from "./styles";
import SearchInput from "../../../components/SearchInput";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import iconInfo from "../../../assets/info.svg";
import iconEmoji from "../../../assets/emoji.svg";
import { RiCloseLine } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";

//import api from "../../../services/api";
import { useAuth } from "../../../context/Auth";
import {
  saveMessage,
  sendMessage,
  // connect,
  disconnect,
  stop,
} from "../../../services/socketIo";
import { useChat } from "../../../context/InfosChat";
import api from "../../../services/api";

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

interface IUser {
  id: number;
  name: string;
  avatar: string;
}

const Middle: React.FC = () => {
  const { user } = useAuth();

  const { showContent, setShowContent } = useChat();

  const [showEmojiContainer, setShowEmojiContainer] = useState(false);

  const [showWhisper, setShowWhisper] = useState(false);

  const [onFocus, setOnFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<object[]>([]);

  const [usernameColor, setUsernameColor] = useState("");

  const [userRecipient, setUserRecipient] = useState<IUser | null>(null);

  const username = user?.name;
  const userId = user?.id;

  useEffect(() => {
    setUsernameColor(randomColor());
  }, []);

  function leftRoom() {
    disconnect();
    setShowContent(false);
  }

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    // disconnect();
    //socket.emit("message", user?.name, message);

    sendMessage(message, username, usernameColor, userId);
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
        top: element.scrollHeight,
      });
    }
  }, [messages]);

  async function handlePrivateChat(
    user_id: number | null | undefined,
    recipient_id: number
  ) {
    try {
      const result = await api.get(`users/${recipient_id}`);
      if (result.data !== null || result.data !== undefined) {
        setUserRecipient(result.data);
      }
    } catch (error) {
      console.log(error.errors);
    }
    // try {
    //   await api.post("recent", {
    //     user_id,
    //     recipient_id,
    //   });
    // } catch (error) {
    //   console.log(error.errors);
    // }
    setShowWhisper(true);
    console.log({ user_id, recipient_id });
  }

  return (
    <Content>
      {showContent ? (
        <Fragment>
          <MHeader>
            <MBack onClick={leftRoom}>
              <HiOutlineArrowNarrowLeft size={25} color="#e0e0e0" />
            </MBack>
            <MTitle>Master</MTitle>
            <MInfo src={iconInfo} />
          </MHeader>
          <MBody>
            {showWhisper && (
              <MCardUser>
                <MCardHeader>
                  <MCardAvatar
                    src={`${userRecipient !== null && userRecipient.avatar}`}
                  />
                  <MCardTexts>
                    <MCardUserName>
                      {userRecipient !== null && userRecipient.name}
                    </MCardUserName>
                  </MCardTexts>
                </MCardHeader>
                <MWhisper>
                  <BiMessageAlt color="#e0e0e0" size={20} />
                  <MWhisperTitle>Whisper</MWhisperTitle>
                </MWhisper>
              </MCardUser>
            )}
            <MMessages className="ref">
              {messages.map((item: any, index) => (
                <MItem
                  key={index}
                  onClick={() => handlePrivateChat(userId, item.userId)}
                >
                  <MUserName color={item.color}>{item.username}</MUserName>
                  <MTwoDots>:</MTwoDots>
                  <MUserMessage>{item.message}</MUserMessage>
                </MItem>
              ))}
            </MMessages>
          </MBody>
          <form onSubmit={(e) => handleSendMessage(e)}>
            <MFooter focus={onFocus}>
              <MInput
                value={message}
                placeholder="Send a message"
                onFocus={() => setOnFocus(true)}
                onBlur={() => setOnFocus(false)}
                onChange={(e) => setMessage(e.target.value)}
              />
              <MContentEmoji>
                {showEmojiContainer && (
                  <MEContainerEmoji>
                    <RiCloseLine
                      size={25}
                      color="#e0e0e0"
                      onClick={() => setShowEmojiContainer(false)}
                    />
                    <SearchInput label="Search for Emotes" />
                  </MEContainerEmoji>
                )}
                <MEmoji
                  src={iconEmoji}
                  focus={onFocus}
                  onClick={() =>
                    setShowEmojiContainer(showEmojiContainer ? false : true)
                  }
                />
              </MContentEmoji>
            </MFooter>
          </form>
        </Fragment>
      ) : (
        <h1>nd</h1>
      )}
    </Content>
  );
};
export default Middle;
