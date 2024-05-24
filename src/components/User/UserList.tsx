import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { UserCard } from "./UserCard";
import { useGeneralContext } from "@/src/context/AppContext";

export function UserList() {
  const { userSearched, nextPage, userFetchLoading } = useGeneralContext();

  const renderItem = ({ item }: FlatListProps) => <UserCard user={item} />;

  const ListEndLoader = () => {
    if (userFetchLoading) {
      return (
        <View className="mt-10 mb-20">
          <ActivityIndicator size={"large"} color={"black"} />
          <Text className="mt-3 text-center">CARREGANDO MAIS</Text>
        </View>
      );
    }
  };

  return (
    <FlatList
      data={userSearched}
      renderItem={renderItem}
      onEndReached={nextPage}
      onEndReachedThreshold={0.8}
      contentContainerStyle={{ gap: 10 }}
      ListFooterComponent={ListEndLoader} // Loader when loading next page.
      style={{ width: 350 }}
    />
  );
}
