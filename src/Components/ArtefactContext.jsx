import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useArtefactContext = () => {
  return useContext(Context);
};

export const ArtefactProvider = ({ children }) => {
  const [selectedArtefact, setSelectedArtefact] = useState(null);

  return (
    <Context.Provider value={{ selectedArtefact, setSelectedArtefact }}>
      {children}
    </Context.Provider>
  );
};