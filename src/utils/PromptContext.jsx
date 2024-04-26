import { createContext, useContext, useState } from "react";

const PromptContext = createContext();

export const usePromptContext = () => useContext(PromptContext);

// eslint-disable-next-line react/prop-types
export const PromptProvider = ({ children }) => {
  const [prompts, setPrompts] = useState([]);
  const [selectedPrompt, setSelectedPrompt] = useState("");

  return (
    <PromptContext.Provider
      value={{ prompts, setPrompts, selectedPrompt, setSelectedPrompt }}
    >
      {children}
    </PromptContext.Provider>
  );
};
