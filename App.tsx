import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import MenuScreen from './MenuScreen';
import FilterScreen from './FilterScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState<Array<{ dishName: string; description: string; price: string; course: string }>>([]);

  const addNewMenuItem = (newDish: { dishName: string; description: string; price: string; course: string }) => {
    setMenuItems([...menuItems, newDish]);
  };

  const removeMenuItem = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));  // Filters out the item based on the index
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menuItems={menuItems} removeMenuItem={removeMenuItem} />}
        </Stack.Screen>
        <Stack.Screen name="Menu">
          {(props) => <MenuScreen {...props} addNewMenuItem={addNewMenuItem} removeMenuItem={removeMenuItem} menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
