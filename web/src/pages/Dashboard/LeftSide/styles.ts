import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../../assets/styles/globalStyles";

interface ITexts {
  size: string;
}

export const Content = styled(FlexColumn)`
  img {
    object-fit: cover;
  }
  grid-area: leftSide;
  width: 100%;

  align-items: center;
`;
export const LSRecents = styled(FlexColumn)`
  border-radius: 1.25rem;
  min-width: 20rem;
  height: 23rem;

  background: rgba(196, 196, 196, 0.04);

  align-items: center;
  justify-content: space-around;

  position: relative;
`;
export const LSTitle = styled.h1`
  color: #adadb8;
  font-weight: bold;
  font-size: 1rem;

  margin: 0.7rem 0rem;
  margin-top: 1rem;
`;
export const LSRecentList = styled.div`
  width: 100%;
  height: 100%;
  max-height: 20rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
`;
export const LSListItem = styled(FlexRow)`
  transition: background 0.2s;
  background: rgb(41, 41, 46) ;

  cursor: pointer;
  padding: 0.4rem;
  border-radius: 1.25rem;
  margin: 0.1rem 0.5rem;

  align-items: flex-end;
  justify-content: space-between;

  :hover {
    background: rgb(32, 32, 36);
  }
`;
export const LSImg = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
  margin-right: 0.4rem;
  margin-left: 0.1rem;
  border-radius: 50%;
`;
export const LSTexts = styled(FlexColumn)`
  flex: 1 1 50%;
`;
export const LSName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.color};
`;
export const LSRecentMessage = styled.span`
  font-size: 0.875rem;
  color: #efeff1;
`;
export const LSOptions = styled(FlexColumn)`
  align-items: flex-end;

  margin-right: 0.5rem;
  flex: 1 1 30%;
`;
export const LSMoreOptions = styled.img`
  width: 1.2rem;
  height: 0.3rem;
  margin-bottom: 0.5rem;

  cursor: pointer;
`;
export const LSMessageCount = styled.div`
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;

  text-align: center;

  font-size: 0.75rem;
  font-weight: bold;
  color: #efeff1;

  background: #7858f9;
`;
export const LSTime = styled.span`
  font-size: 0.75rem;
  color: #5b5b5b;
`;
export const LSMore = styled.img`
  margin: 0.5rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
export const LSGroupInfo = styled(FlexColumn)`
  margin-top: 1rem;
  width: 17.688rem;
  height: 8.375rem;
  border-radius: 1.25rem;
  padding: 1rem;

  background: rgba(70, 70, 73, 0.5);
`;
export const LSGHeader = styled(FlexRow)`
  align-items: center;
  justify-content: space-between;
`;
export const LSGTexts = styled(FlexColumn)``;

export const LSGTitle = styled.h1<ITexts>`
  color: #e0e0e0;
  font-weight: bold;
  font-size: ${(props) => props.size};
`;
export const LSGDescription = styled(LSGTitle)`
  color: #adadb8;
`;
export const LSGMore = styled.img`
  cursor: pointer;
`;
export const LSGBody = styled(FlexRow)`
  justify-content: space-between;

  margin-top: 1.5rem;
`;
export const LSGUserList = styled(FlexRow)`
  position: relative;
`;
export const LSGUserItem = styled.div`
  img {
    margin-left: -2rem;
  }
`;
export const LSGImg = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50%;
`;
export const LSGCount = styled.div`
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  right: -0.5rem;
  bottom: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #7858f9;

  span {
    font-size: 0.813rem;
    font-weight: bold;
    color: #efeff1;
  }
`;
