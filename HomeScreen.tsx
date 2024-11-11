import React from 'react';
import { View, Text, Button, ImageBackground, FlatList, StyleSheet, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp } from '@react-navigation/native';

interface HomeScreenProps {
  menuItems: Array<{ dishName: string; description: string; price: string; course: string }>;
  removeMenuItem: (index: number) => void;
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreenProps> 
= ({ menuItems, removeMenuItem, navigation }) => {
  const [filter, setFilter] 
  = React.useState('All'); // 'all', 'starter', 'main', 'dessert'

  const calculateAveragePrice = (): string => {
    if (menuItems.length === 0) return '0.00';
    const total = menuItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    return (total / menuItems.length).toFixed(2);
  };

  const filteredMenu = filter === 'all' ? 
  menuItems : menuItems.filter(item => item.course === filter);

  return (
    <ImageBackground source={require('./assets/six.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Christoffell's Menu</Text>
        <Text style={styles.Text}>Total Menu Items: {filteredMenu.length}</Text>
        
        <FlatList
          data={filteredMenu}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View>
              <Text>Dish Name: {item.dishName}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Price: {item.price}</Text>
             
            </View>
          )}
        />

        <Text style={styles.Text}>Average Price: {calculateAveragePrice()}</Text>
        
        <Button title="Add Menu Item" onPress={() => navigation.navigate('Menu')} />

        <Text style={styles.Text}>Filter by course:</Text>
        <Picker selectedValue={filter} onValueChange={(itemValue) => setFilter(itemValue)} style={styles.picker}>
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Starters" value="starter" />
          <Picker.Item label="Mains" value="main" />
          <Picker.Item label="Desserts" value="dessert" />
        </Picker>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    fontSize: 24,
    padding: 1
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20
  },
  Text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20
  },
  picker: {
    height: 50,
    width: 200,
    alignSelf: 'center'
  }
});

export default HomeScreen;
