import { StyleSheet } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../data/modules.js'

import ModuleList from '../entity/modules/ModuleList.js';

const ModuleListScreen = () => {
  const modules =initialModules;


const handleSelect = (module) => alert(`item ${module.ModuleCode} selected`);
  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},

});

export default ModuleListScreen;
 

