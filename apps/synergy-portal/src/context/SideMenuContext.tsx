
import React, { createContext } from "react";

// Create Context
export const SideMenuContext = createContext({
  sendMessage: (key: any) => {
    // 
  },
});

interface SideMenuProviderProps {
  children: React.ReactNode;
}

export const SideMenuProvider: React.FC<SideMenuProviderProps> = ({ children }) => {

  const sendMessage = (newMessage: any) => {
    // setMessageToFile(projectId, getCurrentTab.id, newMessage);
  };


  const sendUpdateRequest = (key: any) => {
    // console.log("Update request sent for key:", key);
  };

  return (
    <SideMenuContext.Provider value={{ sendMessage }}>
      {children}
    </SideMenuContext.Provider>
  );
};
