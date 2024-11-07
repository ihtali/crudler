import { StyleSheet, Text, View } from 'react-native';
import Selector from '../../UI/Selector';

const ModuleItem = ({module,onSelect}) => {
// Initialisations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------

return (
    <Selector  onPress={() => onSelect(module)}pressedStyle={styles.pressedItem}>
            <View  style={styles.item}>
              <Text style={styles.text}>
                {module.ModuleCode} {module.ModuleName}
                </Text>
            </View>
            </Selector>
);
};
const styles = StyleSheet.create({
    item: {
        paddingVertical: 35,
        borderTopWidth:6,
        
        borderColor: 'lightgrey',
      },
      text: {
        fontSize:16,
      },
      pressedItem:{
        backgroundColor:'azure',
      },
});

export default ModuleItem;