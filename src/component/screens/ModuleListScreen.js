import {
  ActivityIndicator,
  Alert,
  LogBox,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Screen from "../layout/Screen";
import useLoad from "../API/useLoad.js";
import API from "../API/API.js";

import ModuleList from "../entity/modules/ModuleList.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
export const ModuleListScreen = ({ navigation }) => {
  //Initializations -------------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";

  //State -----------------------------------
  const [modules, , isLoading, loadModules] = useLoad(modulesEndpoint);

  //Handlers --------------------------------
  const onDelete = async (module) => {
    const deleteEndpoint = `${modulesEndpoint}/${module.ModueID}`;
    const result = await API.delete(deleteEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (module) => {
    const result = await API.post(modulesEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };
  const onModify = async (module) => {
    const putEndpoint = `${modulesEndpoint}/${module.ModueID}`;
    const result = await API.put(putEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
    } else Alert.alert(result.message);
  };

  const goToViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });
  //View ------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button
          icon={<Icons.Add />}
          label="Add"
          styleButton={{ backgroundColor: "grey" }}
          onClick={goToAddScreen}
        />
      </ButtonTray>
      {isLoading && (
        <View style={styles.loading}>
          <Text>Retrieving records from {modulesEndpoint}...</Text>
          <ActivityIndicator size="large" />
        </View>
      )}
      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  padding: {
    padding: 25,
  },
  loading: {
    height: 100,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModuleListScreen;