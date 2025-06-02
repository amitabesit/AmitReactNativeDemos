/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import GridScreen from './src/screens/GridScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  Grid: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown: true,
            title: 'Home',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen 
          name="Grid" 
          component={GridScreen}
          options={{
            headerShown: true,
            title: 'Grid Numbers',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
