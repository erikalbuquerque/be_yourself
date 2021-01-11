import React from "react";

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
  MUserMessage,
  MFooter,
  MInput,
  MEmoji,
} from "./styles";

import iconBack from "../../../assets/back.svg";
import iconInfo from "../../../assets/info.svg";

const Middle: React.FC = () => {
  return (
    <Content>
      <MHeader>
        <MBack src={iconBack} />
        <MTitle>Test test</MTitle>
        <MInfo src={iconInfo} />
      </MHeader>
      <MBody>
        <MMessages>
          <MItem>
            <MUserName>i am bot</MUserName>
            <MUserMessage>whatever</MUserMessage>
          </MItem>
        </MMessages>
      </MBody>
      <MFooter>
        <MInput />
        <MEmoji>emoji</MEmoji>
      </MFooter>
    </Content>
  );
};
export default Middle;
