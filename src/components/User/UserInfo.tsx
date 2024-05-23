import { useGeneralContext } from "@/src/context/AppContext";
import { BottomSheet, Button } from "@rneui/base";
import { View } from "react-native";
export function UserInfo() {
  const { closeUserInfo, userInfoShow } = useGeneralContext();
  console.log(userInfoShow);

  return (
    <BottomSheet modalProps={{}} isVisible={userInfoShow}>
      <View className="bg-white h-[75vh]">
        <Button title="Close Bottom Sheet" onPress={closeUserInfo} />
      </View>
    </BottomSheet>
  );
}
