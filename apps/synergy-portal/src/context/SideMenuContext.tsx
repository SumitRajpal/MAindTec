
import React, { createContext } from "react";

// Create Context
export const SideMenuContext = createContext({
  sendMessage: (key: string) => {
    // 
  },
});

interface SideMenuProviderProps {
  children: React.ReactNode;
}

export const SideMenuProvider: React.FC<SideMenuProviderProps> = ({ children }) => {

  const sendMessage = (key: string) => {
    switch (key) {
      case "save":

        sendUpdateRequest("save");
        break;

      case "shuffle":

        sendUpdateRequest("shuffle");
        break;

      case "hint":
        sendUpdateRequest("hint");
        break;

      default:
        console.warn("Invalid action:", key);
    }
  };


  const sendUpdateRequest = (key: string) => {
    console.log(`Sending request for: ${key}`);
    // Here you can add your API call logic using fetch/axios
  };

  return (
    <SideMenuContext.Provider value={{ sendMessage }}>
      {children}
    </SideMenuContext.Provider>
  );
};
