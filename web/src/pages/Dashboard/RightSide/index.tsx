import React, { useEffect, useState } from "react";

import {
  Content,
  Explorer,
  Explorer_Header,
  RSHeaderIcons,
  RSIcon,
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
  RSSpan,
  RSOnline,
  RSMore,
  /* ADD NEW GROUP*/
  RSAddNewGroup,
} from "./styles";
import Input from "../../../components/Input";
import SearchInput from "../../../components/SearchInput";
import TextTruncate from "react-text-truncate";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import splashError from "../../../assets/noSearchResults.svg";

import iconCompass from "../../../assets/compass.svg";
import iconLoading from "../../../assets/loading.svg";
import { MdAdd } from "react-icons/md";


import api from "../../../services/api";

import { subscribeToNewDev } from "../../../services/socketIo";

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

  const [showAddDisplay, setShowAddDisplay] = useState(false);

  

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
        setGroups(response.data.groups);
        setLoading(false);
      } catch (error) {
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

  // useEffect(() => {
  //   subscribeToNewDev((noti: string) => setNotifications([...notifications, noti]));
  // }, [notifications]);

  return (
    <Content>
      <Explorer>
        <Explorer_Header>
          <RSHeaderIcons>
            <RSIcon src={iconCompass} />
            <RSAddGroup onClick={() => setShowAddDisplay(true)}>
              <MdAdd size={30} color="#e0e0e0" />
            </RSAddGroup>
          </RSHeaderIcons>
          {!showAddDisplay && <SearchInput label="Explore communities" />}
        </Explorer_Header>
        {showAddDisplay ? (
          <RSAddNewGroup>
            <h1>Create a new group</h1>
            <Input type="text" name="Title" />
          </RSAddNewGroup>
        ) : (
          <RSBody>
            <RSListGroups>
              {loading ? (
                <Loader
                  type="ThreeDots"
                  color="#e0e0e0"
                  height={10}
                  width={40}
                />
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
                          <RSIndicator color="#249936" />
                          <RSSpan>100 online</RSSpan>
                        </RSOnline>
                        <RSMember>
                          <RSIndicator color="#ADADB8" />
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
        )}
      </Explorer>
    </Content>
  );
};

export default RightSide;
