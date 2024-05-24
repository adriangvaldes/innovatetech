import { GeneralContextProvider } from "@/src/context/AppContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GeneralContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ header: () => <></> }} />
        </Stack>
      </GestureHandlerRootView>
    </GeneralContextProvider>
  );
}
