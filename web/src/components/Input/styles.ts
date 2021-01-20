import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.8rem;
  background: #242428;
  width: 100%;
  max-width: 19.188rem;
  padding: 0.8rem;

  margin: 0.6rem 0rem;
  border: 2px solid transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  svg {
    cursor: pointer;
  }
  :focus-within {
    border: 2px solid #7858f9;
  }
`;
export const Input = styled.input`
  background: transparent !important;
  
  color: #efeff1;

  ::placeholder {
    font-size: 1rem;
    color: #969696;
  }
  :-webkit-autofill {
    -webkit-text-fill-color: #efeff1 !important;
    -webkit-box-shadow: 0 0 0px 1000px #242428 inset;
  }
`;
