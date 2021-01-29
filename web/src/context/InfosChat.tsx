import React, { createContext, useContext, useState } from "react";

interface IChat {
    showContent: boolean;
    setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}

const InfoChatContext = createContext<IChat>({} as IChat);

export const InfoChatProvider: React.FC = ({ children }) => {
  
  const [showContent, setShowContent] = useState(true);

  return (
    <InfoChatContext.Provider value={{ showContent, setShowContent }}>
      {children}
    </InfoChatContext.Provider>
  );
};

export function useChat() {
  const context = useContext(InfoChatContext);
  return context;
}
