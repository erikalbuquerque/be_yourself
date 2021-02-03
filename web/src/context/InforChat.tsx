import React, { createContext, useContext, useState } from "react";

interface IChat {
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}

const InforChatContext = createContext<IChat>({} as IChat);

export const InforChatProvider: React.FC = ({ children }) => {
  const [showContent, setShowContent] = useState(true);

  return (
    <InforChatContext.Provider value={{ showContent, setShowContent }}>
      {children}
    </InforChatContext.Provider>
  );
};

export function useChat() {
  const context = useContext(InforChatContext);
  return context;
}
