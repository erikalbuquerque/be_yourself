import styled from "styled-components";

interface IFooter {
  focus: boolean;
}

export const Content = styled.div`
  background: rgba(196, 196, 196, 0.04);

  margin-top: -4rem;

  border-radius: 1.25rem;
  /* width: 26rem;
   */

  grid-area: middleMiddle;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const MHeader = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1 1 10%;
`;
export const MBack = styled.img`
  cursor: pointer;
  width: 1.313rem;
  height: 1.313rem;
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
  display: flex;
  max-height: 26rem;
  flex-direction: column;
  margin-bottom: 1rem;

  scrollbar-width: thin !important;
  scrollbar-width: 0.213rem;
  overflow-y: auto;
  scrollbar-color: #464649 transparent;
`;
export const MItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.3rem 0rem;
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
  font-size: 0.813rem;
  color: #efeff1;
  word-wrap: break-word;
`;
export const MFooter = styled.div<IFooter>`
  background: ${(props) => (props.focus ? "#121213" : "#464649")};
  transition: background 0.2s;

  padding: 0.7rem;
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
export const MEmoji = styled.img`

  cursor: pointer;

`;
