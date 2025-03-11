// languages/useLanguage.tsx
import { createContext, useContext, useState } from "react";
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import en from "./en.json";
import fr from "./fr.json";
import ar from "./ar.json";
import tm from "./tm.json";

// Initialize i18n with translations
i18n.translations = { en, fr, ar, tm };
i18n.fallbacks = true;

// Define context type
interface LanguageContextType {
  language: string;
  toggleLanguage: (lang: string) => void;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

// LanguageProvider component
export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<string>(
    RNLocalize.getLocales()[0]?.languageCode || "en"
  );

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
  };

  i18n.locale = language;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
