import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/main';
import Profile from './components/Profile';
import Photo from './components/Photo';
import Info from './components/Info';
import History from './components/History';
import Cam from './components/Camera';
import Timer from './components/Timer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Camera" component={Cam} />
      <Stack.Screen name="Timer" component={Timer} />
    </Stack.Navigator>
  );
}

const App = () => {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;