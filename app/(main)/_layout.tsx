import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      {/* Add other screens like services, about, profile later */}
    </Stack>
  );
}
