import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import { useAuth } from "../../context/Auth";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";

import {
  Container,
  Content,
  /* PANEL */
  RSOnOrOff,
  RSUserPanel,
  RSUserNotifications,
  RSNotificationIcon,
  RSUserOptions,
  RSUserAvatar,
  RSIndicator,
  /**/
  RSUserPanelModal,
  RSUserPanelHeader,
  RSUserName,
  RSUserPanelBody,
  RSUserStatus,
  RSUserTitle,
  RSUserButton,
  RSUserFooter,
  RSIconLogOut,
  RSUserLogOut,
  /*Notification Panel*/
  RSNotificationModal,
  RSNotificationHeader,
  RSNotificationTitle,
  RSNotificationBody,
  RSNotificationText,
  RSNotificationsList,
} from "./styles";

import NotificationItem from "../../components/NotificationItem";

import iconNotifications from "../../assets/notifications.svg";
import iconBack from "../../assets/back.svg";
import { RiCloseLine } from "react-icons/ri";

import {
  connect,
  disconnect,
  joinInTheChannel,
  subscribeInTheGlobalChat,
  stop,
} from "../../services/socketIo";
import { InforChatProvider, useChat } from "../../context/InforChat";

interface IJoin {
  room: string;
  username: string;
}

const Dashboard: React.FC = () => {
  const { user, signed, signOut } = useAuth();

  const history = useHistory();

  // useEffect(() => {
  //   //const username: string | null | undefined = user?.name;
  //   connect();
  // }, []);
  const [showOptins, setShowOptions] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const [notifications, setNotifications] = useState<string[]>([]);

  const [checked, setChecked] = useState(true);

  function handleSignOut() {
    signOut();
    disconnect();
    history.push("/");
  }

  useEffect(() => {
    if (!signed) {
      disconnect();
    }
    connect();
    joinInTheChannel("global", user?.name);
    subscribeInTheGlobalChat((data: IJoin) => data);

    return () => stop();
  }, [signed]);

  return (
    <InforChatProvider>
      <Container>
        <Header path="/dashboard">
          <RSUserPanel>
            <RSUserNotifications
              onClick={() =>
                setShowNotifications(showNotifications ? false : true)
              }
            >
              {notifications.length > 0 && (
                <RSIndicator
                  color="#EC1919"
                  position="absolute"
                  bottom="0.4rem"
                  right="0.7rem"
                />
              )}
              <RSNotificationIcon src={iconNotifications} />
            </RSUserNotifications>
            <RSUserOptions
              onClick={() => setShowOptions(showOptins ? false : true)}
            >
              <RSUserAvatar src={user?.avatar || ""} />
              <RSOnOrOff
                signed={!checked ? checked : signed}
                position="absolute"
                bottom="0.1rem"
                right="0rem"
              />
            </RSUserOptions>
            <RSNotificationModal show={showNotifications}>
              <RSNotificationHeader>
                <div></div>
                <RSNotificationTitle>Notifications</RSNotificationTitle>
                <RiCloseLine
                  size={20}
                  color="#e0e0e0"
                  onClick={() => setShowNotifications(false)}
                />
              </RSNotificationHeader>

              <RSNotificationBody>
                <RSNotificationText>Most recent</RSNotificationText>
                <RSNotificationsList>
                  {notifications.map((item, index) => (
                    <NotificationItem
                      key={index}
                      id={index}
                      text={item}
                      time="2 min"
                    />
                  ))}
                </RSNotificationsList>
              </RSNotificationBody>
            </RSNotificationModal>
            <RSUserPanelModal show={showOptins}>
              <RSUserPanelHeader>
                <RSUserOptions>
                  <RSUserAvatar src={user?.avatar || ""} />
                  <RSOnOrOff
                    signed={!checked ? checked : signed}
                    position="absolute"
                    bottom="0.1rem"
                    right="0rem"
                  />
                </RSUserOptions>
                <RSUserName>{user?.name}</RSUserName>
              </RSUserPanelHeader>
              <RSUserPanelBody>
                <RSUserStatus>
                  <RSUserTitle>Online</RSUserTitle>
                  <RSUserButton
                    onClick={() => setChecked(checked ? false : true)}
                    checked={checked}
                  >
                    <div></div>
                  </RSUserButton>
                </RSUserStatus>
              </RSUserPanelBody>
              <RSUserFooter onClick={handleSignOut}>
                <RSIconLogOut src={iconBack} />
                <RSUserLogOut>log out</RSUserLogOut>
              </RSUserFooter>
            </RSUserPanelModal>
          </RSUserPanel>
        </Header>
        <Content>
          <LeftSide />
          <Middle />
          <RightSide />
        </Content>
      </Container>
    </InforChatProvider>
  );
};

export default Dashboard;
