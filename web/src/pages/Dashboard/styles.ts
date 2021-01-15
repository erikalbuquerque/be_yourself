import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  -moz-box-pack: center;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1426px;
  padding: 1.875rem;
  padding-bottom: 0rem;
  -moz-box-pack: center;
  justify-content: center;

  display: grid;
  grid-template-areas: "leftSide middleMiddle rigthSide";
  grid-template-columns: 17rem 26rem 18rem;
  grid-auto-rows: minmax(26rem, auto);
  gap: 4rem;
`;
