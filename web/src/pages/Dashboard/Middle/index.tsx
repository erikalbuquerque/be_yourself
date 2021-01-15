import React, { useState } from "react";

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
  MEmoji
} from "./styles";

import iconBack from "../../../assets/back.svg";
import iconInfo from "../../../assets/info.svg";
import iconEmoji from "../../../assets/emoji.svg";

import api from "../../../services/api";

const Middle: React.FC = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Content>
      <MHeader>
        <MBack src={iconBack} />
        <MTitle>Master</MTitle>
        <MInfo src={iconInfo} />
      </MHeader>
      <MBody>
        <MMessages>
          <MItem>
            <MUserName color="#ff0">iAmBot</MUserName>
            <MTwoDots>:</MTwoDots>
            <MUserMessage>
              whatever KKKKassakddd dk alsdlasj dkajskdja lsjdl kajskdjasldjklas
              ajdjkdajkdajjk
            </MUserMessage>
          </MItem>
        </MMessages>
      </MBody>
      <MFooter focus={isFocus}>
        <MInput
          placeholder="Send a message"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <MEmoji src={iconEmoji} />
      </MFooter>
    </Content>
  );
};
export default Middle;
