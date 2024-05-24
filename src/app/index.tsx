import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Icon, Input } from "@rneui/themed";
import { UserInfo } from "@/src/components/User/UserInfo";
import { StatusBar } from "expo-status-bar";
import { UserList } from "@/src/components/User/UserList";
import { useGeneralContext } from "../context/AppContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { FilterModal } from "../components/FIlterModal";

export default function Index() {
  const { searchUser, openFilterModal, filterApplied } = useGeneralContext();
  return (
    <SafeAreaProvider className="pt-16 bg-gray-200">
      <StatusBar style="dark" />
      <BottomSheetModalProvider>
        <View className="items-center px-5 pb-0 flex-1">
          <Text className="font-bold text-2xl">InnovateTech</Text>
          <View className="w-full h-32 flex-row items-center justify-center">
            <Input
              placeholder="Busca..."
              onChangeText={(search) => searchUser(search)}
              rightIcon={{ type: "feather", name: "user" }}
              containerStyle={{ width: 290, marginRight: 10 }}
            />
            <Icon
              name="filter"
              type={"feather"}
              size={30}
              color={filterApplied ? "white" : "black"}
              onPress={openFilterModal}
              style={{
                marginBottom: 20,
                backgroundColor: filterApplied ? "grey" : "white",
                borderRadius: 99,
                padding: 10,
              }}
            />
          </View>
          <UserList />
          <UserInfo />
          <FilterModal />
        </View>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
}
