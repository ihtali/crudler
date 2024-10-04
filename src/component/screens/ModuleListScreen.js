import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../data/modules.js'

import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = ({navigation}) => {

const [modules , setModules]= useState(initialModules);

const handleSelect = (module) => navigation.navigate('ModuleViewScreen',{module});
const handleDelete= (module) => 
   setModules(modules.filter((item) =>  item.ModuleID !==module.ModuleID));

  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen> 
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
 

