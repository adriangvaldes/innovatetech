import { GeneralContextProvider } from "@/context/AppContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GeneralContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ header: () => <></> }} />
      </Stack>
    </GeneralContextProvider>
  );
}
