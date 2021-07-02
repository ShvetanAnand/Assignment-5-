import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GameForm from './src/gameForm';
import GameList from './src/gameList';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default AppStack = () =>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="GameForm"
        component={GameForm}
        options={{
          title: 'Republic of gamers',
          headerTintColor: 'chartreuse',
          headerStyle: {
            backgroundColor: '#000000' 
          }
        }}
      />
      <Stack.Screen
        name="GameList"
        component={GameList}
        options={{
          headerTintColor: 'chartreuse',
          headerStyle: {
            backgroundColor: '#000000'
          }
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>