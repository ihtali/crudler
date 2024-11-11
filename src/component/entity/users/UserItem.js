import {Pressable, StyleSheet, Text, View } from 'react-native';

const UserItem = ({user,onSelect}) => {
// Initialisations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------

return (
    <Pressable onPress={() => onSelect(user)}>
    <View style={styles.item}>
       <Text style={styles.text}>
     {user.UserFirstname} {user.UserLastname} {user.UserType}
         </Text>
     </View>
     </Pressable>
);
};
const styles = StyleSheet.create({
    item: {
        paddingVertical: 35,
        borderTopWidth:6,
        borderColor: 'lightgrey',
      },
      text: {
        fontSize:16,
      },
      pressedItem:{
        backgroundColor:'azure',
      },
});

export default UserItem;