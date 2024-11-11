import { StyleSheet, Text, View } from 'react-native';
import FullWidthImage from "react-native-fullwidth-image";

const UserView = ({user}) => {
// Initialisations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------

return (
    <View style={styles.container}>
    <FullWidthImage source={{uri: user.UserImageURL}} style={styles.image}/>

    <View style={styles.infoTray}>
<Text style={styles.boldText}>ID {user.UserID}</Text>
    <Text style={styles.text}>{user.UserFirstname} {user.UserLastname} </Text>
    <Text style={styles.text}>Role {user.UserType}</Text>
    <Text style={styles.text}>Email {user.UserEmail}</Text>
    </View>
    </View>
);
};
const styles = StyleSheet.create({
    container:{
        gap:15,
    },
    image:{
        borderRadius:4,
    },
    infoTray:{
gap:8,
    },
    text:{
fontSize:16,
    },
  boldText:{
fontSize:16,
fontWeight:'bold'
    },
    dimText:{
        color:'grey'
    }
});

export default UserView;