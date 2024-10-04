import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../data/modules.js'

import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = () => {


 const [modules , setModules]= useState(initialModules);



const handleDelete = (module) => 
   setModules(modules.filter((item) =>  item.ModuleID !==module.ModuleID));



  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleDelete}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},

});

export default ModuleListScreen;
 

