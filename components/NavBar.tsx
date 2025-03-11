import { View, Text, Button } from "react-native";
import { useTheme } from "@hooks/useTheme";
import { useLanguage } from "@languages/useLanguage";

export default function NavBar({ isAuthenticated, userName }) {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {isAuthenticated && <Text>{userName}</Text>}
      <Button
        title={language === "en" ? "ES" : "EN"}
        onPress={toggleLanguage}
      />
      <Button title={theme === "light" ? "🌙" : "☀️"} onPress={toggleTheme} />
    </View>
  );
}
