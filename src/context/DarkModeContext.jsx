import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeProvider, DarkModeContext };
