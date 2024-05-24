import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { UserCard } from "./UserCard";
import { useGeneralContext } from "@/src/context/AppContext";

export function UserList() {
  const { userData, nextPage, userFetchLoading } = useGeneralContext();

  const renderItem = ({ item }: FlatListProps) => <UserCard user={item} />;

  const ListEndLoader = () => {
    if (userFetchLoading) {
      return (
        <View className="mt-10">
          <ActivityIndicator size={"large"} color={"black"} />
          <Text className="mt-3 text-center">CARREGANDO MAIS</Text>
        </View>
      );
    }
  };

  return (
    <FlatList
      data={userData}
      renderItem={renderItem}
      onEndReached={nextPage}
      onEndReachedThreshold={0.5}
      contentContainerStyle={{ gap: 10 }}
      ListFooterComponent={ListEndLoader} // Loader when loading next page.
      style={{ width: 350 }}
    />
  );
}
