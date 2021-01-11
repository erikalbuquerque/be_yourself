import React from "react";

import {
  Content,
  RSExplorer,
  RSHeader,
  RSIcon,
  RSInput,
  RSBody,
  RSListGroups,
  RSItem,
  RSItemHeader,
  RSBackground,
  RSImg,
  RSItemBody,
  RSTitle,
  RSDescription,
  RSInfo,
  RSMember,
  RSIndicator,
  RSSpan,
  RSOnline,
  /* PANEL */
  RSUserPanel,
  RSUserNotifications,
  RSNotificationIcon,
  RSUserOptions,
  RSUserAvatar,
} from "./styles";

import iconCompass from "../../../assets/compass.svg";
import iconNotifications from "../../../assets/notifications.svg";
import iconSearch from "../../../assets/search.svg";

const RightSide: React.FC = () => {
  return (
    <Content>
      <RSUserPanel>
        <RSUserNotifications>
          <RSIndicator />
          <RSNotificationIcon src={iconNotifications} />
        </RSUserNotifications>
        <RSUserOptions>
          <RSIndicator />
          <RSUserAvatar />
        </RSUserOptions>
        {/* PANEL */}
      </RSUserPanel>
      <RSExplorer>
        <RSHeader>
          <RSIcon src={iconCompass} />
          <RSInput />
        </RSHeader>

        <RSBody>
          <RSListGroups>
            <RSItem>
              <RSItemHeader>
                <RSBackground src="https://www.olharconceito.com.br/imgsite/noticias/selfie1.png" />
                <RSImg src="https://www.olharconceito.com.br/imgsite/noticias/selfie1.png" />
              </RSItemHeader>

              <RSItemBody>
                <RSTitle>gp</RSTitle>
                <RSDescription>sadkasj kajdsk jaksdjkad</RSDescription>
                <RSInfo>
                  <RSMember>
                    <RSIndicator />
                    <RSSpan>100</RSSpan>
                  </RSMember>
                  <RSOnline>
                    <RSIndicator />
                    <RSSpan>100</RSSpan>
                  </RSOnline>
                </RSInfo>
              </RSItemBody>
            </RSItem>
          </RSListGroups>
        </RSBody>
      </RSExplorer>
    </Content>
  );
};

export default RightSide;