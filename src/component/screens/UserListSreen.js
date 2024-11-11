import {  StyleSheet} from "react-native";
import Screen from "../layout/Screen";
import UserList from "../entity/users/UserList";
import { Button, ButtonTray } from "../UI/Button.js";


import initialUsers from '../data/Users';
const UserListScreen =() => {
///////////Initiisations
const users = initialUsers; 
///////////State
///////////Handlers

const handleSelect = (user) => alert(`item ${user.UserID} selected`);

///////////View
    return(
        <Screen>
      <ButtonTray>
        <Button
          label="Add"
        />
      </ButtonTray>
      <UserList users={users} onSelect={handleSelect}/>

</Screen>
    );
};

const styles =StyleSheet.create({
    container: {},
});

export default UserListScreen;