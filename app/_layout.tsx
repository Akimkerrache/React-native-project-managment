import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import SplashSlider from "../components/SplashSlider";

export default function RootLayout() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    console.log("Splash completed, transitioning to auth");
    setIsSplashComplete(true);
  };

  // For testing, auto-skip splash after 5 seconds if stuck
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isSplashComplete) {
        console.log("Auto-skipping splash after 5s");
        setIsSplashComplete(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isSplashComplete]);

  if (!isSplashComplete) {
    return <SplashSlider onComplete={handleSplashComplete} />;
  }

  return (
    <Stack initialRouteName="(auth)">
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
    </Stack>
  );
}
