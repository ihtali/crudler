import {ActivityIndicator, Alert, StyleSheet,Text,View } from 'react-native';
import Screen from '../layout/Screen';
import Icons from '../UI/Icons.js';
import {Button,ButtonTray} from '../UI/Button.js';
import ModuleList from '../entity/modules/ModuleList.js';
import API from '../API/API.js';
import useLoad from '../API/useLoad.js';

const ModuleListScreen = ({navigation}) => {

  const modulesEndpoint = 'https://softwarehub.uk/unibase/api/modules';
  ////STate---------

const [modules, ,isLoading,loadModules] = useLoad(modulesEndpoint);

//handler
const onAdd = async (module) => {
  const result =await API.post(modulesEndpoint,module);
  if ( result.isSuccess ) {
   loadModules(modulesEndpoint);
   navigation.goBack();
  }
  else Alert.alert(result.message);
};

const onModify = async(module) => {
  const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
  const result =await API.put(putEndpoint,module);
  if ( result.isSuccess ) {
    loadModules(modulesEndpoint);
    navigation.navigate("ModuleViewScreen",{module,onDelete,onModify});
   }
   else Alert.alert(result.message);
 };

 const onDelete= async(module) =>  {
  const deleteEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
  const result =await API.delete(deleteEndpoint,module);
  if ( result.isSuccess ) {
   loadModules(modulesEndpoint);
   navigation.goBack();
  }
  else Alert.alert(result.message);
};


const gotoViewSCcreen = (module) => navigation.navigate('ModuleViewScreen',{module,onDelete,onModify});

const gotoAddSCcreen = () => navigation.navigate('ModuleAddScreen',{onAdd});

  return (
    <Screen>
      <ButtonTray>
      <Button label="Add Modules" icon={<Icons.Add />}onClick={gotoAddSCcreen}/>
      </ButtonTray>
      { isLoading &&(
        <View style={styles.spinner}>
         <Text>Retrieving records from {modulesEndpoint}...</Text>
         <ActivityIndicator size='large' />
        </View>
      )      }
      <ModuleList modules={modules} onSelect={gotoViewSCcreen}/>
    </Screen> 
  );
};

const styles = StyleSheet.create({
});

export default ModuleListScreen;
 

