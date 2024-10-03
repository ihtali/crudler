import { Pressable, ScrollView,StyleSheet, Text, View } from 'react-native';
import Screen from '../layout/Screen';
import initialModules from '../data/modules.js'

const ModuleListScreen = () => {
  const modules =initialModules;
const handleSelect = () => alert('item selected');
  return (
    <Screen>
      <ScrollView styles={styles.container}>
      {
        modules.map((module)=>{
          return (

           <Pressable key={module.ModuleCode} onPress={handleSelect}>
            <View  style={styles.item}>
              <Text style={styles.type}>
                {module.ModuleCode}{module.ModuleName}
                </Text>
            </View>
            </Pressable>
          );
        })}
        </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 35,
    borderTopWidth:6,
    borderColor: 'lightgrey',
  },
  text: {
    fontSize:16,
  },

});

export default ModuleListScreen;
 