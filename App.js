import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ModuleListScreen from './src/component/screens/ModuleListScreen';
import ModuleAddScreen from './src/component/screens/ModuleAddScreen';
import ModuleModifyScreen from './src/component/screens/ModuleModifyScreen';
import ModuleViewScreen from './src/component/screens/ModuleViewScreen';
import UserListScreen from './src/component/screens/UserListSreen';
import UserViewScreen from './src/component/screens/UserViewScreen';
import UserAddScreen from './src/component/screens/UserAddSreen';
import UserModifyScreen from './src/component/screens/UserModifyScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ModuleStackNavigator = () => {
  return (
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
        options={{ title: 'List Modules' }}
      />
      <Stack.Screen
        name='ModuleAddScreen'
        component={ModuleAddScreen}
        options={{ title: 'Add Module' }}
      />
      <Stack.Screen
        name='ModuleViewScreen'
        component={ModuleViewScreen}
        options={{ title: 'View Module' }}
      />
      <Stack.Screen
        name='ModuleModifyScreen'
        component={ModuleModifyScreen}
        options={{ title: 'Modify Module' }}
      />
    </Stack.Navigator>
  );
};

const UserStackNavigator = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name='UserListScreen'
        component={UserListScreen}
        options={{ title: 'List User' }}
      />

    <Stack.Screen
        name='UserViewScreen'
        component={UserViewScreen}
        options={{ title: 'User View' }}
      />

     <Stack.Screen
        name='UserAddScreen'
        component={UserAddScreen}
        options={{ title: 'User View' }}
      />
      <Stack.Screen
        name='UserModifyScreen'
        component={UserModifyScreen}
        options={{ title: 'Modify' }}
      />

    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Modules" 
        component={ModuleStackNavigator} 
        options={{ title: 'Modules' }}
      />
      <Drawer.Screen 
        name="User" 
        component={UserStackNavigator} 
        options={{ title: 'User' }}
      />
    </Drawer.Navigator>
  );
};

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;

