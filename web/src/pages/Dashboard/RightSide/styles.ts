import { SrvRecord } from "dns";
import styled from "styled-components";

interface IInput {
  focus: boolean;
}
interface IIndicator {
  signed: boolean;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

interface IRSIcon {
  size?: string;
}
interface IUserPanel {
  show: boolean;
}
interface ISwitch {
  checked: boolean;
}

export const Content = styled.div`
  position: relative;
  grid-area: rigthSide;
  width: 100%;
  img {
    object-fit: cover;
  }
`;
export const RSExplorer = styled.div`
  background: rgba(196, 196, 196, 0.04);
  /* width: 17rem;
   */
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 32.375rem;
  padding: 2rem 1rem;
  border-radius: 1.25rem;
`;
export const RSHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const RSHeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`;
export const RSIcon = styled.img<IRSIcon>`
  width: ${(props) => props.size || "1.5rem"};
  height: ${(props) => props.size || "1.5rem"};
`;

export const RSearchBox = styled.div<IInput>`
  background: ${(props) => (props.focus ? "#121213" : "#464649")};
  transition: background 0.2s;
  width: 100%;
  border-radius: 1.25rem;
  border: 2px solid transparent;

  padding: 0.4rem 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  :focus-within {
    border: 2px solid #7858f9;
  }
`;

export const RSearcIcon = styled.img`
  margin-right: 0.4rem;
`;

export const RSInput = styled.input`
  border: none;
  outline: none;
  width: 100%;

  color: #e0e0e0;
  background: transparent;

  ::placeholder {
    color: #adadb8;
  }
`;
export const RSBody = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const RSListGroups = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 22rem;
  scrollbar-width: thin !important;
  scrollbar-width: 0.213rem;
  overflow-y: auto;
  scrollbar-color: #464649 transparent;
`;
export const RSAddGroup = styled.div``;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #0d0d0d;
`;
export const RSItemHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const RSBackground = styled.img`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.313rem 0.313rem 0rem 0rem;
`;
export const RSImg = styled.img`
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

  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-end;
  flex: 1 1 40%;
`;
export const RSMember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const RSIndicator = styled.div<IIndicator>`
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  border-radius: 50%;
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};

  background: ${(props) => props.signed ? "#249936" : "#EC1919"};
`;
export const RSIndicator2 = styled.div``;
export const RSSpan = styled.span`
  font-size: 0.75rem;
  color: #adadb8;
`;
export const RSOnline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
/* PANEL */
export const RSUserPanel = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  width: 6.063rem;
  height: 2.813rem;
  right: -1rem;
  top: -4.7rem;
`;
export const RSUserNotifications = styled.div`
  position: relative;
  cursor: pointer;
`;
export const RSNotificationIcon = styled.img`
  width: 1rem;
  height: 1.2rem;
`;
export const RSUserOptions = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  :hover {
    opacity: 0.8;
  }
`;
export const RSUserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

/* PANEL DISPLAY*/
export const RSUserPanelMore = styled.div<IUserPanel>`
  cursor: default;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  background: #18181b;

  padding: 1rem;
  border-radius: 1.25rem;
  width: 18rem;
  height: 11.563rem;

  position: absolute;
  top: 3rem;
  right: 1rem;

  z-index: 10;
`;
export const RSUserPanelHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const RSUserName = styled.span`
  margin-left: 0.5rem;
  color: #e0e0e0;
  font-size: 1rem;
  font-weight: bold;
`;
export const RSUserPanelBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RSUserStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const RSUserTitle = styled.span`
  color: #e0e0e0;
  font-size: 0.875rem;
`;
export const RSUserButton = styled.div<ISwitch>`
  cursor: pointer;
  width: 2.5rem;
  height: 1.08rem;
  border-radius: 1.25rem;

  background: #18181b;
  transition: border 0.2s;
  border: 2px solid ${(props) => (props.checked ? "#7858f9" : "#ADADB8")};

  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  div {
    transition: background 0.2s;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-bottom: 0.01rem;
    width: 0.7rem;
    height: 0.7rem;
    position: absolute;
    right: ${(props) => props.checked && "0rem"};
    left: ${(props) => !props.checked && "0rem"};
    background: ${(props) => (props.checked ? "#7858f9" : "#ADADB8")};
    border-radius: 50%;
  }
`;
export const RSUserFooter = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: background 0.2s;

  padding: 0.2rem;
  background: transparent;
  border-radius: 0.5rem;
  width: 100%;

  :hover {
    background: #464649;
  }
`;
export const RSIconLogOut = styled.img``;
export const RSUserLogOut = styled.span`
  color: #e0e0e0;
  font-size: 0.875rem;
`;
