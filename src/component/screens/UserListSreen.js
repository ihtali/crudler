import {  StyleSheet} from "react-native";
import { useState } from "react";
import Screen from "../layout/Screen";
import UserList from "../entity/users/UserList";
import { Button, ButtonTray } from "../UI/Button.js";

import initialUsers from '../data/Users';

const UserListScreen =({navigation}) => {
///////////Initiisations
const [users,setUsers] = useState (initialUsers); 
///////////State
///////////Handlers
const handelSelect = (user) => navigation.navigate('UserViewScreen',{user});

const handleDelete = (user) =>{
    setUsers(users.filter((item)=>item.UserID !== user.UserID));
    
  };

///////////View
    return(
        <Screen>
      <ButtonTray>
        <Button
          label="Add"
        />
      </ButtonTray>
      <UserList users={users} onSelect={handelSelect}/>

</Screen>
    );
};

const styles =StyleSheet.create({
    container: {},
});

export default UserListScreen;