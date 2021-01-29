import styled from "styled-components";

import {
  FlexColumn,
  FlexRow,
  HoverBackgroundEffect,
} from "../../../assets/styles/globalStyles";

interface IFooter {
  focus?: boolean;
}

export const Content = styled.div`
  background: rgba(196, 196, 196, 0.04);

  width: 100%;
  margin-top: -4rem;
  border-radius: 1.25rem;

  grid-area: middleMiddle;

  ${FlexColumn}

  justify-content: space-between;

  @media (max-width: 600px) {
    margin-top: 0rem;
  }
`;
export const MHeader = styled.div`
  padding: 2rem;

  ${FlexRow}
  justify-content: space-between;
  flex: 1 1 10%;
`;
export const MBack = styled.div`
  height: 1.563rem;

  ${HoverBackgroundEffect}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MTitle = styled.h1`
  color: #e0e0e0;
  font-weight: bold;
  font-size: 1rem;
`;
export const MInfo = styled.img`
  cursor: pointer;
  width: 1.313rem;
  height: 1.313rem;
`;
export const MBody = styled.div`
  padding: 0rem 2rem;
  width: 100%;
  flex: 1 1 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const MMessages = styled.div`
  ${FlexColumn}
  position: relative;

  max-height: 26rem;
  margin-bottom: 1rem;

  scrollbar-width: thin !important;
  scrollbar-width: 0.213rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: #464649 transparent;
`;

export const MCardUser = styled.div`
  ${FlexColumn};

  padding: 0.5rem;
  border-radius: 0.5rem;

  z-index: 2;
  position: absolute;
`;
export const MCardHeader = styled.div`
  ${FlexRow}
  align-items: center;
  justify-content: space-around;
`;
export const MCardAvatar = styled.img`
  background: #0d0d0d;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;
export const MCardTexts = styled.div``;
export const MCardUserName = styled.span`
  color: #e0e0e0;
  font-weight: bold;
  font-size: 1rem;
`;

export const MWhisper = styled.div`
  ${FlexRow}
  ${HoverBackgroundEffect}
  :hover {
    background: #522af4;
  }
  background: #7858f9;
`;
export const MWhisperTitle = styled.span`
  margin-left: 0.5rem;
  color: #e0e0e0;
  font-weight: bold;
  font-size: 1rem;
`;
export const MItem = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;

  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.3rem 0rem;

  :hover {
    background: rgba(196, 196, 196, 0.1);
  }
`;
export const MUserName = styled.span`
  text-transform: lowercase;
  font-size: 0.813rem;
  font-weight: bold;
  color: ${(props) => props.color};
`;
export const MTwoDots = styled.span`
  font-size: 0.813rem;
  font-weight: bold;
  color: #adadb8;
  margin-right: 0.2rem;
`;
export const MUserMessage = styled.span`
  width: 100%;
  font-size: 0.813rem;
  color: #efeff1;
  word-wrap: break-word;
`;
export const MFooter = styled.div<IFooter>`
  background: ${(props) => (props.focus ? "#121213" : "#464649")};
  transition: background 0.2s;

  padding: 0.3rem;
  margin: 0rem 2rem;
  margin-bottom: 2rem;
  border: 2px solid transparent;
  border-radius: 0.313rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  :focus-within {
    border: 2px solid #7858f9;
  }
  position: relative;
`;
export const MInput = styled.input`
  border: none;
  outline: none;

  width: 100%;
  margin-left: 0.5rem;
  color: #e0e0e0;
  background: transparent;

  ::placeholder {
    color: #adadb8;
  }
`;

export const MContentEmoji = styled.div`
  ${FlexRow}
  align-items: center;
  padding: 0.3rem 0.5rem;
`;

export const MEContainerEmoji = styled.div`
  ${FlexColumn}
  background: #121213;

  position: absolute;
  right: 0rem;
  bottom: 4rem;
  border-radius: 1rem;

  height: 21rem;
  width: 18rem;
  padding: 0rem 1rem;

  svg {
    ${HoverBackgroundEffect}
    padding: 0.2rem;
    margin: 0.5rem 0rem;
    align-self: flex-end;
  }
`;

export const MEmoji = styled.img<IFooter>`
  ${HoverBackgroundEffect}
  :hover {
    background: ${(props) => (props.focus ? "#464649" : "#121213")};
  }
`;
