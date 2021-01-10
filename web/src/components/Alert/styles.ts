import styled from "styled-components";

interface IAlert {
    bg: string;
  }

export const AlertTag = styled.div<IAlert>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  position: relative;
  cursor: pointer;
  max-width: 13rem;
  padding: 0.8rem 0.4rem;
  border-radius: 0.8rem;
  margin: 0.4rem 0rem;

  background: ${(props) => props.bg};

  svg {
    cursor: pointer;
    position: absolute;
    right: 0.4rem;
  }

  span {
    color: #e0e0e0;
    font-size: 0.8rem;
    max-width: 12rem;
  }
`;
