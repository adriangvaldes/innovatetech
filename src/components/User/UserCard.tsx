import { useGeneralContext } from "@/src/context/AppContext";
import { Avatar } from "@rneui/base";
import { TouchableOpacity, View, Text } from "react-native";

export function UserCard({ user }: UserCardProps) {
  const { showUserInfo } = useGeneralContext();

  return (
    <TouchableOpacity
      onPress={showUserInfo}
      className="w-full h-28 border border-slate-400 px-4 py-2"
    >
      <View className="flex-row h-full justify-between">
        <View className="h-full justify-center">
          <Avatar
            size={80}
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/women/57.jpg",
            }}
          />
        </View>
        <View className="h-full justify-between pb-5">
          <Text className="font-bold text-xl">Ms Alea Christoffersen</Text>
          <View className="flex-row pr  justify-between">
            <Text className="text-lg">Female</Text>
            <Text className="text-lg">01/01/1990</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
