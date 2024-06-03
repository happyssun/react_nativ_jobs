import { Stack } from "expo-router/stack";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Layout() {
  const [fontLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // usecallback은 usememo와 유사합니다. 다만 usememo는 값을 usecallback은 함수를 메모리에 저장하는 차이를 가집니다.
  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />;
}
