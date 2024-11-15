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
  import UserList from "../entity/users/UserList.js";
  import Icons from "../UI/Icons.js";
  import { Button, ButtonTray } from "../UI/Button.js";
  
  export const UserListScreen = ({ navigation }) => {
    // Initializations -------------------------
    LogBox.ignoreLogs([
      "Non-serializable values were found in the navigation state",
    ]);
    const usersEndpoint = "https://softwarehub.uk/unibase/api/users";
  
    // State -----------------------------------
    const [users, , isLoading, loadUsers] = useLoad(usersEndpoint);
  
    // Handlers --------------------------------
    const onDelete = async (user) => {
      try {
        const deleteEndpoint = `${usersEndpoint}/${user.UserID}`;
        const result = await API.delete(deleteEndpoint, user);
        if (result.isSuccess) {
          loadUsers(usersEndpoint);
          navigation.goBack();
        } else {
          Alert.alert("Error", result.message || "Failed to delete user");
        }
      } catch (error) {
        Alert.alert("Error", "An unexpected error occurred");
        console.error(error);
      }
    };
  
    const onAdd = async (user) => {
      try {
        const result = await API.post(usersEndpoint, user);
        if (result.isSuccess) {
          loadUsers(usersEndpoint);
          navigation.goBack();
        } else {
          Alert.alert("Error", result.message || "Failed to add user");
        }
      } catch (error) {
        Alert.alert("Error", "An unexpected error occurred");
        console.error(error);
      }
    };
  
    const onModify = async (user) => {
      try {
        const putEndpoint = `${usersEndpoint}/${user.UserID}`;
        const result = await API.put(putEndpoint, user);
        if (result.isSuccess) {
          loadUsers(usersEndpoint);
          navigation.navigate("UserViewScreen", { user, onDelete, onModify });
        } else {
          Alert.alert("Error", result.message || "Failed to modify user");
        }
      } catch (error) {
        Alert.alert("Error", "An unexpected error occurred");
        console.error(error);
      }
    };
  
    const goToViewScreen = (user) =>
      navigation.navigate("UserViewScreen", { user, onDelete, onModify });
  
    const goToAddScreen = () => navigation.navigate("UserAddScreen", { onAdd });
  
    // View ------------------------------------
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
        {!isLoading && users.length === 0 && (
          <View style={styles.loading}>
            <Text>No users found.</Text>
          </View>
        )}
        {!isLoading && users.length > 0 && (
          <UserList users={users} onSelect={goToViewScreen} />
        )}
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
  