import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type MenuScreenProps = {
  addNewMenuItem: (newDish: { dishName: string; description: string; price: string; course: string }) => void;
  removeMenuItem: (index: number) => void;
  menuItems: Array<{ dishName: string; description: string; price: string; course: string }>;
  navigation: { goBack: () => void };
};

const MenuScreen: React.FC<MenuScreenProps> = ({ addNewMenuItem, removeMenuItem, menuItems, navigation }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('starter');

  const addDish = () => {
    if (!dishName || !description || !price) {
      alert('Please fill out all fields');
      return;
    }
    const newDish = { dishName, description, price, course };
    addNewMenuItem(newDish);
    setDishName('');
    setDescription('');
    setPrice('');
    setCourse('starter');
  };

  return (
    <ImageBackground source={require('./assets/home.JPEG.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <TextInput
          placeholder="Dish Name"
          onChangeText={setDishName}
          value={dishName}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          onChangeText={setDescription}
          value={description}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={setPrice}
          value={price}
          style={styles.input}
        />
        
        <Text style={styles.Text}>Select Course:</Text>
        <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)} style={styles.picker}>
          <Picker.Item label="Starter" value="starter" />
          <Picker.Item label="Main" value="main" />
          <Picker.Item label="Dessert" value="dessert" />
        </Picker>
        
        <Button title="Add Dish" onPress={addDish} />
        
        <Text style={styles.Text}>Menu Items:</Text>
        {menuItems.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Text>Dish Name: {item.dishName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: {item.price}</Text>
            <Button title="Remove Dish" onPress={() => removeMenuItem(index)} />
          </View>
        ))}
        <Button title="Back to Home" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 16,
  },
  input: {
    marginVertical: 8,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 23,
  },
  Text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: 200,
    alignSelf: 'center',
  },
  menuItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default MenuScreen;
