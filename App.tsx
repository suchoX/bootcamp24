/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from './src/types';
import Home from './src/homepage';
import ProductDescription from './src/descpage';
import ProductList from './src/listpage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name={'home'}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'list'}
          component={ProductList}
          options={{title: 'Product List'}}
        />
        <Stack.Screen
          name={'description'}
          component={ProductDescription}
          options={{title: 'Product Description'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
