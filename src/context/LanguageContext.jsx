import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("FR");
  const handleLanguage = () => {
    language === "FR" ? setLanguage("EN") : setLanguage("FR");
  };
  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTheme1 = () => useContext(LanguageContext);
