import { useState } from 'react';
import { LogBox,StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../data/modules.js'

import ModuleList from '../entity/modules/ModuleList.js';
import Icons from '../UI/icons.js';
import {Button,ButtonTray} from '../UI/Button.js'

const ModuleListScreen = ({navigation}) => {

  LogBox.ignoreLogs(['Non=serializable values where found in the nagvigation state']);


const [modules , setModules]= useState(initialModules);
//handler

const handleDelete= (module) =>  {
   setModules(modules.filter((item) =>  item.ModuleID !==module.ModuleID));
};

const handleAdd=(module) => setModules([...modules,module]);

const onDelete = (module) => {
  handleDelete(module);
  navigation.goBack();
}

const onAdd = (module) => {
  handleAdd(module);
  navigation.goBack();
}


const gotoViewSCcreen = (module) => navigation.navigate('ModuleViewScreen',{module,onDelete});

const gotoAddSCcreen = () => navigation.navigate('ModuleAddScreen',{onAdd});
  return (
    <Screen>
      <ButtonTray>
      <Button label="Add" icon={<Icons.Add />}onClick={gotoAddSCcreen}/>
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewSCcreen}/>
    </Screen> 
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
 

