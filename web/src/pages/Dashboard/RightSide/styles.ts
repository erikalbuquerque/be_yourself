import styled from "styled-components";

import {
  FlexColumn,
  FlexRow,
  HoverBackgroundEffect,
} from "../../../assets/styles/globalStyles";

interface IRSIcon {
  size?: string;
}

interface IGlobalChat {
  show: boolean;
}

interface IIndicator {
  color: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
}

export const Content = styled.div`
  position: relative;
  grid-area: rigthSide;
  width: 100%;
  img {
    object-fit: cover;
  }
`;
export const RSIndicator = styled.div<IIndicator>`
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  border-radius: 50%;

  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  background: ${(props) => props.color};
`;
export const Explorer = styled.div`
  background: rgba(196, 196, 196, 0.04);
  /* width: 17rem;
   */
  ${FlexColumn}
  align-items: center;

  height: 32.375rem;
  padding: 2rem 1rem;
  border-radius: 1.25rem;
`;
export const Explorer_Header = styled.div`
  width: 100%;
  ${FlexColumn}
`;
export const RSHeaderIcons = styled.div`
  ${FlexRow}
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;

export const RSGlobalChat = styled.div<IGlobalChat>`
  ${FlexRow}
  align-items: center;
  cursor: pointer;

  padding: 0.5rem;
  border-radius: 1rem;

  background: transparent;
  transition: background 0.2s;
  ${(props) => !props.show && ":hover { background: #464649;}"};
`;
export const RSGlobalTitle = styled.span`
  font-size: 1rem;
  color: #e0e0e0;
  margin-left: 0.5rem;
`;
export const RSIcon = styled.img<IRSIcon>`
  width: ${(props) => props.size || "1.5rem"};
  height: ${(props) => props.size || "1.5rem"};
`;

export const RSBody = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;

  ${FlexColumn}
  justify-content: space-between;
  align-items: center;
`;
export const RSListGroups = styled.div`
  width: 100%;
  height: 100%;

  ${FlexColumn}
  align-items: center;

  max-height: 22rem;
  overflow-y: auto;
`;
export const RSAddGroup = styled.div`
  height: 1.563rem;
  width: 2rem;

  ${FlexRow}
  justify-content: center;
  align-items: center;

  ${HoverBackgroundEffect}
`;
export const SplashError = styled.img``;
export const RSMore = styled.img`
  margin-top: 0.5rem;
  width: 0.938rem;
  height: 0.938rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
export const RSItem = styled.div`
  width: 100%;
  border-radius: 0.313rem;
  height: 7.813rem;
  margin-top: 0.5rem;
  cursor: pointer;

  ${FlexColumn}
  justify-content: flex-start;
  align-items: center;

  background: #0d0d0d;
  transition: background 0.2s;
  :hover {
    background: #1b1b1b;
  }
`;
export const RSItemHeader = styled.div`
  ${FlexColumn}
  width: 100%;
  position: relative;
`;
export const RSBackground = styled.img`
  background: #0d0d0d;
  width: 100%;
  height: 2.5rem;
  border-radius: 0.313rem 0.313rem 0rem 0rem;
`;
export const RSImg = styled.img`
  background: #0d0d0d;
  width: 2rem;
  height: 2rem;
  position: absolute;
  left: 0.8rem;
  top: 1rem;
  border: 0.3rem solid #0d0d0d;
  border-radius: 0.1rem 0.1rem 0rem 0rem;
`;
export const RSItemBody = styled.div`
  padding: 0.5rem;
  width: 100%;

  ${FlexRow}
`;
export const RSItemBodyHeader = styled.div`
  flex: 1 1 60%;
`;
export const RSTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: bold;
  color: #e0e0e0;
`;
export const RSDescription = styled.span`
  color: #adadb8;

  font-size: 0.75rem;
  width: 9.5rem;
`;
export const RSInfo = styled.div`
  ${FlexColumn}
  align-items: flex-start;
  justify-content: center;
  align-self: flex-end;
  flex: 1 1 40%;
`;
export const RSMember = styled.div`
  ${FlexRow}
  justify-content: center;
  align-items: center;
`;

export const RSSpan = styled.span`
  font-size: 0.75rem;
  color: #adadb8;
`;
export const RSOnline = styled.div`
  ${FlexRow}
  justify-content: center;
  align-items: center;
`;

/* ADD NEW GROUP*/
export const RSAddNewGroup = styled.div`
  width: 100%;
  background: #0d0d0d;
  padding: 0.5rem;
`;
