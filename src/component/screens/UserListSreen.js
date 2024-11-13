import {ActivityIndicator,Alert,LogBox,StyleSheet,Text,View,} from "react-native";
import Screen from "../layout/Screen";
import useLoad from "../API/useLoad.js";
import API from "../API/API.js";

import UserList from '../entity/users/UserList.js';
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

export const UserListScreen = ({ navigation }) => {
  //Initializations -------------------------
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const usersEndpoint = "https://softwarehub.uk/unibase/api/users";

  //State -----------------------------------
  const [user, , isLoading, loadUsers] = useLoad(usersEndpoint);

  //Handlers --------------------------------
  const onDelete = async (user) => {
    const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.delete(deleteEndpoint, user);
    if (result.isSuccess) {
        loadUsers(usersEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (user) => {
    const result = await API.post(usersEndpoint, user);
    if (result.isSuccess) {
        loadUsers(usersEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };
  const onModify = async (user) => {
    const putEndpoint = `${usersEndpoint}/${user.UserID}`;
    const result = await API.put(putEndpoint, user);
    if (result.isSuccess) {
        loadUsers(usersEndpoint);
      navigation.navigate("UserViewScreen", { user, onDelete, onModify });
    } else Alert.alert(result.message);
  };

  const goToViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });

  const goToAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });
  //View ------------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button
          icon={<Icons.Add />}
          label="Add"
          onClick={goToAddScreen}
        />
      </ButtonTray>
      {isLoading && (
        <View style={styles.loading}>
          <Text>Retrieving records from {usersEndpoint}...</Text>
          <ActivityIndicator size="large" />
        </View>
      )}
      <UserList users={user} onSelect={goToViewScreen} />
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

export default UserListScreen;