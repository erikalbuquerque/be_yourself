import React, { useState } from "react";

import {
  Content,
  LSRecents,
  LSTitle,
  LSRecentList,
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

const LeftSide: React.FC = () => {
  const [isMessage, setIsMessage] = useState(false);
  return (
    <Content>
      <LSRecents>
        <SearchInput label="Search" />
        <LSTitle>Recents chats</LSTitle>
        <LSRecentList>
          {[1, 2, 3, 4].map((item, index) => (
            <LSListItem key={index}>
              <LSImg src="https://i.pinimg.com/originals/b0/48/d3/b048d3b08bcbd8d49ec26754289d665c.jpg" />
              <LSTexts>
                <LSName color="#9E472B">nonsense</LSName>
                <LSRecentMessage>carai de asa</LSRecentMessage>
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
          ))}
        </LSRecentList>
        <LSMore src={iconLoading} />
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
