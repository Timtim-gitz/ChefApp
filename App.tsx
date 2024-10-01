import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

import MenuScreen from './MenuScreen';

const Stack = createStackNavigator();

const App: React.FC=() => {
  const [menuItem, setMenuItem] = 
  useState<{dishName:string;description:string; price: string; course:string}|null>(null)

  const addNewMenuItem = (newDish:{dishName:string; description:string; price:string; course:string}) => {
    setMenuItem(newDish);
  };
  const clearMenuItem=()=>{
    setMenuItem(null)
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menuItem={menuItem} />}
        </Stack.Screen>
        <Stack.Screen name="Menu">
          {(props) => <MenuScreen {...props} addNewMenuItem={addNewMenuItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;