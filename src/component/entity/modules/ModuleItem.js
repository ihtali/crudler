import { Pressable, StyleSheet, Text, View } from 'react-native';

const ModuleItem = ({module,onSelect}) => {
// Initialisations ---------------------
// State -------------------------------
// Handlers ----------------------------
// View --------------------------------
return (
    <Pressable  onPress={() => onSelect(module)}>
            <View  style={styles.item}>
              <Text style={styles.type}>
                {module.ModuleCode}{module.ModuleName}
                </Text>
            </View>
            </Pressable>
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
});

export default ModuleItem;