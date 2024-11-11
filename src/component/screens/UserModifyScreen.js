import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';




const UserModifyScreen = ({navigation,route}) => {
///intialisation

const {module,onModify} = route.params;

  ////handle
const handleCancel = navigation.goBack;

  return (
    <Screen>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default UserModifyScreen;
 