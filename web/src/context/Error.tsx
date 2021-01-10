import React, { createContext, useContext, useState } from "react";

interface IError {
  errorMessage: string[];
  setErrorMessage: React.Dispatch<React.SetStateAction<string[]>>;
}

const ErrorContext = createContext<IError>({} as IError);

export const ErrorProvider: React.FC = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  return (
    <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
      {children}
    </ErrorContext.Provider>
  );
};

export function useError() {
  const context = useContext(ErrorContext);
  return context;
}
