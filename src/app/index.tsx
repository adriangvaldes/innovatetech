import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Avatar, Button, Icon, Input } from "@rneui/themed";
import { UserInfo } from "@/src/components/User/UserInfo";
import { StatusBar } from "expo-status-bar";
import { UserList } from "@/src/components/User/UserList";

export default function Index() {
  return (
    <SafeAreaProvider className="pt-16 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1 items-center px-5">
        <Text className="font-bold text-2xl">InnovateTech</Text>
        <View className="w-full h-32 flex-row items-center justify-center">
          <Input
            placeholder="Busca..."
            rightIcon={{ type: "feather", name: "user" }}
            containerStyle={{ width: 290, marginRight: 10 }}
          />
          <Icon
            name="filter"
            type="feather"
            size={22}
            color="black"
            raised
            style={{ marginBottom: 0 }}
          />
        </View>
        <UserList />
        <UserInfo />
      </View>
    </SafeAreaProvider>
  );
}
