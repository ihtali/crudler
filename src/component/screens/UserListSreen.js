import { Pressable, ScrollView,StyleSheet,Text,View } from "react-native";
import Screen from "../layout/Screen";

import initialUsers from '../data/Users';

const UserListScreen =() => {
///////////Initiisations
const users = initialUsers; 

///////////State
///////////Handlers
const handleSelect = () => alert("User Selected");
///////////View
    return(
        <Screen>
        <ScrollView style={styles.container}>
        {users.map((user)=>{
        return(
         <Pressable onPress={handleSelect}>
        <View style={styles.item}>
           <Text style={styles.Text}>
         {user.UserFirstname} {user.UserLastname} {user.UserType}
             </Text>
         </View>
         </Pressable>
        );
    })}
    </ScrollView>
</Screen>
    );
};

const styles =StyleSheet.create({
    container: {},
    item: {
        paddingVertical:24,
        borderTopWidth: 6,
        borderColor: 'lightgray',
    },
    Text: {
        fontSize:16,
    },
});

export default UserListScreen;