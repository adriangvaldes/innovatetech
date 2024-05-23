import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { UserCard } from "./UserCard";
import { useState } from "react";

export function UserList() {
  const [userData, setUserData] = useState([
    { user: { name: "John", sex: "male", birthDate: "01/01/1990" } },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);

  const renderItem = ({ item }: any) => <UserCard user={item} />;

  async function fetchNextPage() {}

  const ListEndLoader = () => {
    if (!isFirstPageReceived && isLoading) {
      return (
        <View>
          <ActivityIndicator size={"large"} color={"black"} />
          <Text style={{ marginTop: 15 }}>CARREGANDO MAIS</Text>
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
      ListFooterComponent={ListEndLoader} // Loader when loading next page.
    />
  );
}
