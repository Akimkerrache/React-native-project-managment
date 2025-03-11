import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ThemeProvider } from "@hooks/useTheme";
import { LanguageProvider } from "@languages/useLanguage";
import { LogBox } from "react-native";

export default function App() {
  useEffect(() => {
    // Ignore harmless warnings for now
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Slot />
      </LanguageProvider>
    </ThemeProvider>
  );
}
