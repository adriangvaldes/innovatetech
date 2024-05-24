import { useGeneralContext } from "@/src/context/AppContext";
import { Avatar } from "@rneui/themed";
import { View, Text, Dimensions } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo } from "react";

export function UserInfo() {
  const { userSelected, bottomSheetRef } = useGeneralContext();

  const snapPoints = useMemo(() => ["40%", "70%"], []);

  return (
    <BottomSheetModal ref={bottomSheetRef} snapPoints={snapPoints} index={1}>
      <View style={{ flex: 1 }}>
        {!!userSelected && (
          <BottomSheetView
            style={{
              flex: 1,
              paddingHorizontal: 30,
              width: Dimensions.get("window").width,
              paddingBottom: 30,
            }}
          >
            <View className="z-9 self-center justify-center">
              <Avatar
                size={200}
                rounded
                containerStyle={{ borderWidth: 2, borderColor: "grey" }}
                source={{
                  uri: userSelected.photo,
                }}
              />
            </View>

            <View className="flex-row gap-1 self-center mt-2">
              <Text className="text-2xl font-bold">{userSelected?.name}</Text>
            </View>

            <View className="mt-5 justify-center mr-10">
              <View className="flex-row gap-1">
                <Text className="text-slate-400">Email: </Text>
                <Text className="">{userSelected?.email}</Text>
              </View>

              <View className="flex-row gap-1">
                <Text className="text-slate-400">Gênero: </Text>
                <Text className="">{userSelected?.gender}</Text>
              </View>

              <View className="flex-row gap-1">
                <Text className="text-slate-400">Data de nascimento: </Text>
                <Text className="">{userSelected?.birthDate}</Text>
              </View>

              <View className="flex-row gap-1">
                <Text className="text-slate-400">Telefone: </Text>
                <Text className="">{userSelected?.phone}</Text>
              </View>

              <View className="flex-row gap-1">
                <Text className="text-slate-400">Nacionalidade: </Text>
                <Text className="">{userSelected?.nationality}</Text>
              </View>

              <View className="flex-row gap-1">
                <Text className="text-slate-400">Endereço: </Text>
                <Text className="">
                  {`${userSelected?.address.street.name}, ${userSelected?.address.street.number}, ${userSelected?.address.city}, ${userSelected?.address.state}, ${userSelected?.address.country}, ${userSelected?.address.postcode}`}
                </Text>
              </View>

              <View className="flex-row gap-1">
                <Text className="text-slate-400">
                  Documento ({userSelected?.identification.name}):{" "}
                </Text>
                <Text className="">{userSelected?.identification.value}</Text>
              </View>
            </View>
          </BottomSheetView>
        )}
      </View>
    </BottomSheetModal>
  );
}
