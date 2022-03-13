/**
 * Atividade 2: parte N1
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Facebook from './src/pages/Facebook';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home"
                      component={Home}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Facebook"
                      component={Facebook}
                      options={{headerShown: false}}/>
        <Stack.Screen name="Login"
                       component={Login}
                       options={{
                         title: '',
                         headerStyle:{
                           backgroundColor:'#3B5998',},
                         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;