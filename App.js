
///////////////
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/component/screens/ModuleListScreen';
import ModuleAddScreen from './src/component/screens/ModuleAddScreen';
import ModuleModifyScreen from './src/component/screens/ModuleModifyScreen';
import ModuleViewScreen from './src/component/screens/ModuleViewScreen';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='ModuleListScreen'
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name='ModuleListScreen'
          component={ModuleListScreen}
          options={{ title: 'List modules' }}
        />
        <Stack.Screen
          name='ModuleAddScreen'
          component={ModuleAddScreen}
          options={{ title: 'Add modules' }}
        />
        <Stack.Screen
          name='ModuleViewScreen'
          component={ModuleViewScreen}
          options={{ title: 'View modules' }}
        />
        <Stack.Screen
          name='ModuleModifyScreen'
          component={ModuleModifyScreen}
          options={{ title: 'Modify modules' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
