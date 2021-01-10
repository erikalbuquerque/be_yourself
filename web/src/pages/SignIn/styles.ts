import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 6.4rem;
`;
export const Title = styled.h1`
  margin-bottom: 3.3rem;
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
export const Forgot = styled.div`
  align-self: flex-end;
  a {
    text-decoration: none;
    color: #e0e0e0;
    font-size: 0.9rem;
    transition: color 0.2s;

    :hover {
      color: #8a8a8a;
    }
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
  margin: 0.8rem 0rem;

  background: #7858f9;

  font-weight: bold;
  font-size: 1rem;
  color: #e0e0e0;

  :hover {
    background: #653FFF;
    color: #C8C6C6;
  }
  :disabled {
    opacity: 0.5;
  }
  :disabled:hover {
    background: #7858f9;
    color: #e0e0e0;
  }
`;
export const CreateAcc = styled.div`
  a {
    text-decoration: none;
    color: #7858F9;
    font-size: 0.9rem;
    font-weight: bold;
    margin-left: 0.3rem;
    transition: color 0.2s;

    :hover {
      color: #653FFF;
    }
  }
`;
export const Span = styled.span`
  color: #e0e0e0;
  font-size: 0.9rem;
`;
export const SpanMessage = styled.span`
  font-size: 1rem;
  color: #d34242;
`;
