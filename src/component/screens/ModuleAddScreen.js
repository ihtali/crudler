import { StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/icons.js';
import {Button,ButtonTray} from '../UI/Button.js'

const defaultModule ={
  ModuleID: 106778,
  ModuleName: 'Games Programming',
  ModuleCode: 'CI2270',
  ModuleLevel: 4,
  ModuleLeaderID: 1,
  ModuleLeaderName: 'Graeme Jones',
  ModuleImage:
  'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg',
  };


const ModuleAddScreen = ({navigation,route}) => {

  const handleAdd=() =>onAdd(defaultModule);

  const handleCancel = navigation.goBack;

  const{onAdd} = route.params;
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
      <Button label="Add" icon={<Icons.Add />}onClick={handleAdd}/>
      <Button label="Cancel" icon={<Icons.Add />}onClick={handleCancel}/>

      </ButtonTray>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ModuleAddScreen;
 