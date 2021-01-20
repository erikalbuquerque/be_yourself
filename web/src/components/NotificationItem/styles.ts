import styled from "styled-components";

interface ISpan {
  color: string;
}

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;

  transition: background 0.2s;
  :hover {
    background: rgba(196, 196, 196, 0.04);
  }
`;
export const RSNotificationsItemAvatar = styled.img`
  background: #0d0d0d;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
export const RSNotificationItemTexts = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RSNotificationItemFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;
export const RSNotificationSpan = styled.span<ISpan>`
  color: ${(props) => props.color || "#e0e0e0"}; //
  font-weight: 500;
  font-size: 0.75rem;
`;
