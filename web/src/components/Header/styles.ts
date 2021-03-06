import styled from "styled-components";

import { FlexRow } from "../../assets/styles/globalStyles";

export const Container = styled.header`
  /* margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3.5rem; */
  padding: 0rem 3rem;
  padding-top: 2rem;
  align-self: flex-start;

  ${FlexRow}
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Logo = styled.img`
  :hover {
    opacity: 0.8;
  }
`;
