import { useState ,useEffect} from 'react';
import { StyleSheet,Text } from 'react-native';
import Screen from '../layout/Screen';
import API from '../API/API.js';
import RenderCount from '../UI/RenderCount.js';
import Icons from '../UI/Icons.js';
import ModuleList from '../entity/modules/ModuleList.js';
import {Button,ButtonTray} from '../UI/Button.js';

const ModuleListScreen = ({navigation}) => {

  const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';
  ////STate---------

const [modules , setModules]= useState([]);
const [isLoading ,setIsloading] = useState(true);

const loadModules = async (endpoint) => {
  const response = await API.get(endpoint);
 setIsloading(false);
 if(response.isSuccess) setModules(response.result);
};

useEffect(() => {
   loadModules(modulesEndpoint);
   }, []);

//handler

const handleDelete= (module) =>  {
   setModules(modules.filter((item) =>  item.ModuleID !==module.ModuleID));
};

const handleAdd=(module) => setModules([...modules,module]);

const handleModify = (updatedModule) => setModules(
  modules.map((module) => (module.ModuleID===updatedModule.ModuleID) ? updatedModule: module)
);


const onDelete = (module) => {
  handleDelete(module);
  navigation.goBack();
}

const onAdd =(module) => {
  handleAdd(module);
  navigation.goBack();
}

const onModify = (module) => {
  handleModify(module);
  navigation.navigate("ModuleListScreen");
}


const gotoViewSCcreen = (module) => navigation.navigate('ModuleViewScreen',{module,onDelete,onModify});

const gotoAddSCcreen = () => navigation.navigate('ModuleAddScreen',{onAdd});

  return (
    <Screen>
      <RenderCount />
      <ButtonTray>
      <Button label="Add" icon={<Icons.Add />}onClick={gotoAddSCcreen}/>
      </ButtonTray>
      {
      isLoading && <Text>Loading records....</Text>
      }
      <ModuleList modules={modules} onSelect={gotoViewSCcreen}/>
    </Screen> 
  );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;
 

