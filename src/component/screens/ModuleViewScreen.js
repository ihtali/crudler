import { StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';

const ModuleViewScreen = ({navigation,route}) => {
/////initialization
const { module ,onDelete,onModify} =route.params;

//handler
const gotoModifyScreen = ( ) => navigation.navigate('ModuleModifyScreen',{module,onModify});


  return (
    <Screen>
   <ModuleView module={module} onDelete={onDelete}  onModify={gotoModifyScreen}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  
});

export default ModuleViewScreen;
 