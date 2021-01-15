import React, { useEffect, useState } from "react";

import {
  Content,
  RSExplorer,
  RSHeader,
  RSHeaderIcons,
  RSIcon,
  RSearchBox,
  RSearcIcon,
  RSInput,
  RSBody,
  RSListGroups,
  RSAddGroup,
  SplashError,
  RSItem,
  RSItemHeader,
  RSBackground,
  RSImg,
  RSItemBody,
  RSItemBodyHeader,
  RSTitle,
  RSDescription,
  RSInfo,
  RSMember,
  RSIndicator,
  RSIndicator2,
  RSSpan,
  RSOnline,
  RSMore,
  /* PANEL */
  RSUserPanel,
  RSUserNotifications,
  RSNotificationIcon,
  RSUserOptions,
  RSUserAvatar,
  /**/
  RSUserPanelMore,
  RSUserPanelHeader,
  RSUserName,
  RSUserPanelBody,
  RSUserStatus,
  RSUserTitle,
  RSUserButton,
  RSUserFooter,
  RSIconLogOut,
  RSUserLogOut,
} from "./styles";

import TextTruncate from "react-text-truncate";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import splashError from "../../../assets/noSearchResults.svg";

import iconCompass from "../../../assets/compass.svg";
import iconLoading from "../../../assets/loading.svg";
import iconNotifications from "../../../assets/notifications.svg";
import iconSearch from "../../../assets/search.svg";
import iconBack from "../../../assets/back.svg";
import { MdAdd } from "react-icons/md";

import api from "../../../services/api";
import { useAuth } from "../../../context/Auth";
import { useHistory } from "react-router-dom";

interface IGroup {
  id: number;
  name: string;
  avatar: string;
  background: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

const RightSide: React.FC = () => {
  const { signOut, user, signed } = useAuth();
  //JSON.stringify(user || '{}');

  const history = useHistory();

  const [isFocus, setIsFocus] = useState(false);
  const [showOptins, setShowOptions] = useState(false);
  const [checked, setChecked] = useState(true);

  const [groups, setGroups] = useState([]);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(false);

  const [skip, setSkip] = useState(0);

  useEffect(() => {
    async function loadGroupos() {
      try {
        setLoading(true);
        const response = await api.get("/groups?take=3");
        setGroups(response.data.groups);
        setTotal(response.data.total);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    loadGroupos();
  }, []);

  useEffect(() => {
    async function paginate() {
      try {
        setLoading(true);
        const response = await api.get(`/groups?take=3&skip=${skip}`);
        console.log(response.data.groups);
        setGroups(response.data.groups);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    paginate();
  }, [skip]);

  function handlePaginate() {
    if (skip === total) {
      setSkip(0);
    } else {
      setSkip(skip + 3);
    }
  }

  function handleSignOut() {
    signOut();
    history.push("/");
  }

  return (
    <Content>
      <RSUserPanel>
        <RSUserNotifications>
          <RSIndicator2
          />
          <RSNotificationIcon src={iconNotifications} />
        </RSUserNotifications>
        <RSUserOptions
          onClick={() => setShowOptions(showOptins ? false : true)}
        >
          <RSUserAvatar src={user?.avatar || ""} />
          <RSIndicator
            signed={signed}
            position="absolute"
            bottom="0.1rem"
            right="0rem"
          />
        </RSUserOptions>
        <RSUserPanelMore show={showOptins}>
          <RSUserPanelHeader>
            <RSUserOptions>
              <RSUserAvatar src={user?.avatar || ""} />
              <RSIndicator
                signed={signed}
                position="absolute"
                bottom="0.1rem"
                right="0rem"
              />
            </RSUserOptions>
            <RSUserName>{user?.name}</RSUserName>
          </RSUserPanelHeader>
          <RSUserPanelBody>
            <RSUserStatus>
              <RSUserTitle>online</RSUserTitle>
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
        </RSUserPanelMore>
      </RSUserPanel>
      <RSExplorer>
        <RSHeader>
          <RSHeaderIcons>
            <RSIcon src={iconCompass} />
            <RSAddGroup>
              <MdAdd size={25} color="#e0e0e0" />
            </RSAddGroup>
          </RSHeaderIcons>
          <RSearchBox focus={isFocus}>
            <RSearcIcon src={iconSearch} />
            <RSInput
              placeholder="Explore communities"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </RSearchBox>
        </RSHeader>

        <RSBody>
          <RSListGroups>
            {loading ? (
              <Loader type="ThreeDots" color="#e0e0e0" height={10} width={40} />
            ) : groups.length === 0 ? (
              <SplashError src={splashError} />
            ) : (
              groups.map((group: IGroup) => (
                <RSItem key={group.id}>
                  <RSItemHeader>
                    <RSBackground src={group.background} />
                    <RSImg src={group.avatar} />
                  </RSItemHeader>

                  <RSItemBody>
                    <RSItemBodyHeader>
                      <RSTitle>{group.name}</RSTitle>
                      <TextTruncate
                        line={2}
                        element={RSDescription}
                        truncateText="…"
                        text={group.description}
                      />
                    </RSItemBodyHeader>
                    <RSInfo>
                      <RSOnline>
                        <RSIndicator2  />
                        <RSSpan>100 online</RSSpan>
                      </RSOnline>
                      <RSMember>
                        <RSIndicator2 />
                        <RSSpan>100 members</RSSpan>
                      </RSMember>
                    </RSInfo>
                  </RSItemBody>
                </RSItem>
              ))
            )}
          </RSListGroups>
          <RSMore src={iconLoading} onClick={handlePaginate} />
        </RSBody>
      </RSExplorer>
    </Content>
  );
};

export default RightSide;
