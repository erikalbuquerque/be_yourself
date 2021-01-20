import React, { useState } from "react";

import {
  Container,
  RSNotificationsItemAvatar,
  RSNotificationItemTexts,
  RSNotificationItemFooter,
  RSNotificationSpan,
} from "./styles";

import botImg from "../../assets/bot.png";
import { RiCloseLine } from "react-icons/ri";

import TextTruncate from "react-text-truncate";

interface IProps {
  id: number;
  text: string;
  time: string;
}

const NotificationItem: React.FC<IProps> = ({ id, text, time }) => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  return (
    <Container
      onMouseOver={() => setShowCloseIcon(true)}
      onMouseLeave={() => setShowCloseIcon(false)}
    >
      <RSNotificationsItemAvatar src={botImg} />
      <RSNotificationItemTexts>
        <TextTruncate
          line={2}
          element={RSNotificationSpan}
          truncateText="..."
          text={text}
        />
        <RSNotificationItemFooter>
          <RSNotificationSpan color="#464649">{time}</RSNotificationSpan>
          {showCloseIcon ? (
            <RiCloseLine
              onClick={() => console.log(`id: ${id}`)}
              size={18}
              color="#e0e0e0"
            />
          ) : (
            <RiCloseLine size={18} color="transparent" />
          )}
        </RSNotificationItemFooter>
      </RSNotificationItemTexts>
    </Container>
  );
};
export default NotificationItem;
