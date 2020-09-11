import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AttendeeDetails from './containers/List/AttendeeDetails';
import MyDrawer from './containers/MyDrawer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="AttendeeDetails" component={AttendeeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
