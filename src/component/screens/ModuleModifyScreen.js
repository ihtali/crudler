import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';
import ModuleForm from '../entity/modules/ModuleForm';


const ModuleModifyScreen = ({navigation,route}) => {
///intialisation

const {module,onModify} = route.params;

  ////handle
const handleCancel = navigation.goBack;


  return (
    <Screen>
      <ModuleForm originalModule={module} onSubmit={onModify} onCancel={handleCancel}/>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
 