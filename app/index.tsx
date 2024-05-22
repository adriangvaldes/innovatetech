import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "@rneui/themed";
import { useGeneralContext } from "@/context/AppContext";
import { UserInfo } from "@/components/UserInfo";

export default function Index() {
  const { showUserInfo } = useGeneralContext();

  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-slate-400">
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Button title="Open Bottom Sheet" onPress={showUserInfo} />
        <UserInfo />
      </View>
    </SafeAreaProvider>
  );
}
