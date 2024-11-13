import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';
import UserView from '../entity/users/UserView';
import UserForm from '../entity/users/UserForm';




const UserModifyScreen = ({navigation,route}) => {
///intialisation

const {user,onModify} = route.params;

  ////handle
  const handleCancel = navigation.goBack;
  return (
    <Screen>
      <UserForm originalUser={user} onSubmit={onModify} onCancel={handleCancel} />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default UserModifyScreen;
