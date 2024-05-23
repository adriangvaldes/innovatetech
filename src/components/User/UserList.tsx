import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { UserCard } from "./UserCard";
import { useEffect, useState } from "react";
import { fetchUsers } from "@/src/api/api";

export function UserList() {
  const [userData, setUserData] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);

  const renderItem = ({ item }: FlatListProps) => <UserCard user={item} />;

  async function fetchNextPage() {}

  async function loadUsers() {
    const userFetched = await fetchUsers();
    setUserData(userFetched);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const ListEndLoader = () => {
    if (!isFirstPageReceived && isLoading) {
      return (
        <View>
          <ActivityIndicator size={"large"} color={"black"} />
          <Text className="mt-3">CARREGANDO MAIS</Text>
        </View>
      );
    }
  };

  return (
    <FlatList
      data={userData}
      renderItem={renderItem}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.8}
      contentContainerStyle={{ gap: 15 }}
      ListFooterComponent={ListEndLoader} // Loader when loading next page.
    />
  );
}
