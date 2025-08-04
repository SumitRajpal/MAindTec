
import React, { createContext, useState } from "react";

// Create Context
export const SideMenuContext = createContext({
  contentState: {
    save: false,
    shuffle: false,
    hint: false,
  },
  updateContentState: (key: string) => { },
});

// Context Provider
interface SideMenuProviderProps {
  children: React.ReactNode;
}

export const SideMenuProvider: React.FC<SideMenuProviderProps> = ({ children }) => {
  const [contentState, setContentState] = useState({
    save: false,
    shuffle: false,
    hint: false,
  });

  const updateContentState = (key: string) => {
    switch (key) {
      case "save":
        setContentState((prevState) => ({
          ...prevState,
          save: !prevState.save,
        }));
        sendUpdateRequest("save");
        break;

      case "shuffle":
        setContentState((prevState) => ({
          ...prevState,
          shuffle: !prevState.shuffle,
        }));
        sendUpdateRequest("shuffle");
        break;

      case "hint":
        setContentState((prevState) => ({
          ...prevState,
          hint: !prevState.hint,
        }));
        sendUpdateRequest("hint");
        break;

      default:
        console.warn("Invalid action:", key);
    }
  };

  // Simulated API call function
  const sendUpdateRequest = (key: string) => {
    console.log(`Sending request for: ${key}`);
    // Here you can add your API call logic using fetch/axios
  };

  return (
    <SideMenuContext.Provider value={{ contentState, updateContentState }}>
      {children}
    </SideMenuContext.Provider>
  );
};
