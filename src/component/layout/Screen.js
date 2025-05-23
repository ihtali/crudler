import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const Screen = ({children}) => {
  return (
    <View style={styles.screen}>
     {children}
      <StatusBar style='light'/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Screen;
