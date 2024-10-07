import { StyleSheet} from 'react-native';
import Screen from '../layout/Screen';
import ModuleView from '../entity/modules/ModuleView';

const ModuleViewScreen = ({navigate,route}) => {
/////initialization
const { module ,onDelete} =route.params;


  return (
    <Screen>
   <ModuleView module={module} onDelete={onDelete}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  
});

export default ModuleViewScreen;
 