import { StyleSheet,Text,View } from "react-native";
import Screen from "../layout/Screen";

import initialUsers from '../data/Users';

const UserListScreen =() => {
///////////Initiisations
const users = initialUsers; 

///////////State
///////////Handlers
///////////View
    return(
        <Screen>
          <View style={styles.container}>
        {users.map((user)=>{
        return(
        <View style={styles.item}>
           <Text style={styles.Text}>
         {user.UserFirstname} {user.UserLastname} {user.UserType}
             </Text>
         </View>
        );
    })}
    </View>
</Screen>
    );
};

const styles =StyleSheet.create({
    container: {},
    item: {
        paddingVertical:24,
        borderTopWidth: 4,
        borderColor: 'lightgray',
    },
    Text: {
        fontSize:16,
    },
});

export default UserListScreen;