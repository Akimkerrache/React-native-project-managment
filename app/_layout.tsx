import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import SplashSlider from "../components/SplashSlider";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    console.log("Splash completed, transitioning to auth");
    setIsSplashComplete(true);
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isSplashComplete) {
        console.log("Auto-skipping splash after 5s");
        handleSplashComplete();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSplashComplete]);

  if (!isSplashComplete) {
    return <SplashSlider onComplete={handleSplashComplete} />;
  }

  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
