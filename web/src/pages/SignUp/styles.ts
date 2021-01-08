import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 3.2rem;
`;
export const Title = styled.h1`
  margin-bottom: 3.2rem;
  color: #e0e0e0;
  font-size: 1.4rem;
  font-weight: bold;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const AvatarContent = styled.div`
  align-self: flex-end;

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  label {
    border-radius: 0.8rem;
    background: #242428;
    padding: 0.4rem;
    font-size: 0.9em;
    font-weight: bold;
    color: #8a8a8a;
    display: inline-block;
    cursor: pointer;
    transition: background 0.2s;
  }

  :focus + label,
  label:hover {
    background-color: #7858F9;
    color: #e0e0e0;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.2s;

  border-radius: 0.8rem;
  padding: 0.8rem;
  width: 20rem;
  max-width: 37.1rem;
  min-width: 10.5rem;
  margin: 0.4rem 0rem;

  background: #7858f9;

  font-weight: bold;
  font-size: 1rem;
  color: #e0e0e0;

  :hover {
    background: #653fff;
    color: #c8c6c6;
  }
`;
export const Back = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  a {
    text-decoration: none;
    color: #7858f9;
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: 0.3rem;
    transition: color 0.2s;

    :hover {
      color: #653fff;
    }
  }
`;

export const SpanMessage = styled.span`
  font-size: 1rem;
  color: #d34242;
`;
