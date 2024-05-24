import { useGeneralContext } from "@/src/context/AppContext";
import { Avatar } from "@rneui/base";
import { TouchableOpacity, View, Text } from "react-native";

export function UserCard({ user }: UserCardProps) {
  const { showUserInfo } = useGeneralContext();

  return (
    <TouchableOpacity
      onPress={() => showUserInfo(user)}
      className="h-28 w-[350px] border border-slate-400 px-4 py-2"
    >
      <View className="flex-row h-full justify-between">
        <View className="h-full justify-center">
          <Avatar
            size={80}
            rounded
            source={{
              uri: user.photo,
            }}
          />
        </View>
        <View className="h-[95px] w-[220px] justify-between pb-5 pt-1">
          <Text className="font-bold text-lg">{user.name}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-md capitalize">{user.gender}</Text>
            <Text className="text-md">{user.birthDate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
