import styled from "styled-components";

import { FlexColumn, FlexRow } from "../../assets/styles/globalStyles";

interface IOnOrOff {
  signed: boolean;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

interface IIndicator {
  color: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
}

interface IModal {
  show: boolean;
}
interface ISwitch {
  checked: boolean;
}

export const Container = styled(FlexColumn)`
  -moz-box-pack: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1426px;
  height: 100vh;
  margin: auto;
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.875rem;
  padding-bottom: 0rem;
  -moz-box-pack: center;
  justify-content: center;

  display: grid;
  grid-template-areas: "leftSide middleMiddle rigthSide";
  grid-template-columns: 20rem 32rem 20rem;
  grid-auto-rows: minmax(26rem, auto);
  gap: 4rem;

  @media (max-width: 600px) {
    grid-template-columns: 25rem;
    gap: 2rem;
    grid-template-areas:
      "middleMiddle"
      "leftSide"
      "rigthSide";
  }
`;

/* PANEL */
export const RSUserPanel = styled(FlexRow)`
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
`;
export const RSUserNotifications = styled(FlexRow)`
  cursor: pointer;
  height: 1.563rem;
  padding: 0.5rem;
  border-radius: 0.4rem;

  position: relative;

  align-items: center;

  background: transparent;
  transition: background 0.2s;
  :hover {
    background: #464649;
  }
`;
export const RSNotificationIcon = styled.img`
  width: 1rem;
  height: 1.2rem;
`;
export const RSUserOptions = styled(FlexRow)`
  position: relative;

  align-items: flex-end;
  margin-left: 1rem;

  :hover {
    opacity: 0.8;
  }
`;
export const RSUserAvatar = styled.img`
  background: #0d0d0d;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

export const RSOnOrOff = styled.div<IOnOrOff>`
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  border-radius: 50%;

  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};

  transition: background 0.2s;
  background: ${(props) => (props.signed ? "#249936" : "#ADADB8")};
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
/* PANEL DISPLAY*/
export const RSUserPanelModal = styled.div<IModal>`
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
  top: 4.5rem;
  right: 3.5rem;

  z-index: 10;
`;
export const RSUserPanelHeader = styled(FlexRow)`
  align-items: center;
  justify-content: center;
`;
export const RSUserName = styled.span`
  margin-left: 0.5rem;
  color: #e0e0e0;
  font-size: 1rem;
  font-weight: bold;
`;
export const RSUserPanelBody = styled(FlexColumn)`
  width: 100%;
  align-items: center;
`;
export const RSUserStatus = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const RSUserTitle = styled.span`
  color: #e0e0e0;
  font-size: 0.875rem;
`;
export const RSUserButton = styled(FlexRow)<ISwitch>`
  cursor: pointer;
  width: 2rem;
  height: 1.08rem;
  border-radius: 1.25rem;

  background: #18181b;
  transition: border 0.2s;
  border: 2px solid ${(props) => (props.checked ? "#7858f9" : "#ADADB8")};

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
export const RSUserFooter = styled(FlexRow)`
  cursor: pointer;
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
  margin-left: 0.5rem;
`;

/*Notification Panel*/
export const RSNotificationModal = styled(RSUserPanelModal)`
  padding-top: 0.3rem;
  right: 6rem;
  height: auto;
  max-height: 30rem;

  svg {
    background: transparent;
    transition: background 0.2s;
    border-radius: 0.4rem;
    cursor: pointer;

    :hover {
      background: #464649;
    }
  }
`;
export const RSNotificationHeader = styled(FlexRow)`
  width: 100%;
  padding: 1rem;

  align-items: center;
  justify-content: space-between;
`;
export const RSNotificationTitle = styled.h1`
  font-size: 0.875rem;
  font-weight: bold;
  color: #e0e0e0;
`;
export const RSNotificationBody = styled.div`
  width: 100%;
`;
export const RSNotificationText = styled.h2`
  color: #adadb8;
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;
export const RSNotificationsList = styled.div`
  width: 100%;
  max-height: 24rem;
  overflow-y: auto;
`;
