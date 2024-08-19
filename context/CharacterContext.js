import React, { createContext, useState, useContext } from 'react';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <CharacterContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => useContext(CharacterContext);