import { Text, View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Overlay } from "@rneui/themed";
import { useGeneralContext } from "@/src/context/AppContext";
import { useState } from "react";

export function FilterModal() {
  const [selectedIndex, setSelectedIndex] = useState();
  const { closeFilterModal, filterModalShow, handleGenderToSearch } =
    useGeneralContext();

  function applyFilters() {
    if (selectedIndex === undefined || selectedIndex === 2)
      handleGenderToSearch();
    else handleGenderToSearch(selectedIndex === 0 ? "male" : "female");
    closeFilterModal();
  }

  return (
    <Overlay
      isVisible={filterModalShow}
      onBackdropPress={closeFilterModal}
      overlayStyle={styles.overLayContainer}
    >
      <Text className="text-lg font-bold mb-5">Filtro por gênero</Text>
      <ButtonGroup
        buttons={["Male", "Female", "Todos"]}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={{ marginBottom: 20 }}
      />
      <View className="flex-row">
        <Button
          title="Cancelar"
          type="outline"
          radius="lg"
          buttonStyle={styles.buttonContainer}
          color={"warning"}
          titleStyle={styles.buttonTitle}
          onPress={closeFilterModal}
        />
        <Button
          title="Aplicar"
          type="solid"
          radius="lg"
          buttonStyle={styles.buttonContainer}
          color={"primary"}
          onPress={applyFilters}
        />
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overLayContainer: {
    paddingVertical: 20,
    width: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
    borderColor: "black",
    marginRight: 10,
    width: 120,
  },
  buttonTitle: {
    color: "black",
  },
});
