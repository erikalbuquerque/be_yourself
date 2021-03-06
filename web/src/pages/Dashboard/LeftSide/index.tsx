import React, { useState, useEffect } from "react";

import {
  Content,
  LSRecents,
  LSTitle,
  LSRecentList,
  LSNoContant,
  LSListItem,
  LSImg,
  LSTexts,
  LSName,
  LSRecentMessage,
  LSOptions,
  LSMoreOptions,
  LSTime,
  LSMessageCount,
  LSMore,
  LSGroupInfo,
  LSGHeader,
  LSGTexts,
  LSGTitle,
  LSGDescription,
  LSGMore,
  LSGBody,
  LSGUserList,
  LSGUserItem,
  LSGImg,
  LSGCount,
} from "./styles";

import SearchInput from "../../../components/SearchInput";

import iconDots from "../../../assets/optionsDots.svg";
import iconLoading from "../../../assets/loading.svg";
import iconInfo from "../../../assets/info.svg";

import api from "../../../services/api";
import { useAuth } from "../../../context/Auth";
import { useChat } from "../../../context/InforChat";
import { connect, disconnect } from "../../../services/socketIo";

const LeftSide: React.FC = () => {
  const { user } = useAuth();
  const { setShowContent } = useChat();
  const [isMessage, setIsMessage] = useState(false);

  const [recentChats, setRecentChats] = useState<object[]>([]);
  const [loadChats, setLoadChats] = useState(true);

  useEffect(() => {
    (async function loadRecentChats() {
      try {
        const response = await api.get(`/recent/${user?.id}`);
        if (response.data.length > 0) {
          setRecentChats([...recentChats, response.data]);
        }
        setLoadChats(false);
      } catch (error) {
        console.log(error);
        setLoadChats(false);
      }
    })();
  }, [loadChats]);

  function handleOpenPrivateChat() {
    disconnect();
    setShowContent(false);
  }
  return (
    <Content>
      <LSRecents>
        <SearchInput label="Search" />
        <LSTitle>Recents chats</LSTitle>
        <LSRecentList>
          {recentChats.length > 0 ? (
            recentChats.map((item: any, index: number) => (
              <LSListItem key={index} onClick={handleOpenPrivateChat}>
                <LSImg
                  src={`http://localhost:3333/uploads/${item[index].recipient_avatar}`}
                />
                <LSTexts>
                  <LSName color="#2b8d9e">
                    {item[index].recipient_username}
                  </LSName>
                  <LSRecentMessage>asdasd</LSRecentMessage>
                </LSTexts>

                <LSOptions>
                  <LSMoreOptions src={iconDots} />
                  {isMessage ? (
                    <LSMessageCount>7</LSMessageCount>
                  ) : (
                    <LSTime>04 min</LSTime>
                  )}
                </LSOptions>
              </LSListItem>
            ))
          ) : (
            <LSNoContant>No chats yet</LSNoContant>
          )}
        </LSRecentList>
        {recentChats.length > 0 && <LSMore src={iconLoading} />}
      </LSRecents>

      <LSGroupInfo>
        <LSGHeader>
          <LSGTexts>
            <LSGTitle size="0.75rem">AKATSUKI</LSGTitle>
            <LSGDescription size="0.688rem">
              Created 11/14/2020 at 19:19
            </LSGDescription>
          </LSGTexts>
          <LSGMore src={iconInfo} />
        </LSGHeader>

        <LSGBody>
          <LSGTexts>
            <LSGTitle size="1.125rem">Description</LSGTitle>
            <LSGDescription size="0.75rem">
              Não sei oq vai em uma ...
            </LSGDescription>
          </LSGTexts>

          <LSGUserList>
            {[1, 2, 3].map((item) => (
              <LSGUserItem key={item}>
                <LSGImg src="https://i.pinimg.com/originals/b0/48/d3/b048d3b08bcbd8d49ec26754289d665c.jpg" />
              </LSGUserItem>
            ))}
            <LSGCount>
              <span>+28</span>
            </LSGCount>
          </LSGUserList>
        </LSGBody>
      </LSGroupInfo>
    </Content>
  );
};

export default LeftSide;
