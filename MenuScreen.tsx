
import React, { useState } from 'react';
import { View, ImageBackground,TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type MenuScreenProps = {
  addNewMenuItem: (newDish: { dishName: string; description: string; price: string; course: string }) => void;
  navigation: { goBack: () => void; };
};

const MenuScreen: React.FC<MenuScreenProps> = ({ addNewMenuItem, navigation }) => {
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
    navigation.goBack();
  };

  return (
    <ImageBackground source={require('./assets/home.JPEG.jpeg')}
    style={styles.background}>
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
      <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)}>
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>
      <Button title="Add Dish" onPress={addDish} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background:{ 
    flex:1,
    resizeMode: 'center',
    justifyContent:'center'},

  container: {
    padding: 16,
    textDecorationColor:'white'
    
  },
  input: {
    marginVertical: 8,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    textDecorationColor:'black',
    borderBlockStartColor:'white',
    fontSize:23
  },

    Text:{
      fontSize:23,
      textDecorationColor:'black'


    },
  
    
  
  
});

export default MenuScreen;