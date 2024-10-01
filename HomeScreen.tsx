import React from 'react';
import { View, Text, Button, ImageBackground, FlatList, StyleSheet,} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface MenuItem {
  dishName: string;
  description: string;
  price: string;
  course: string;
}

interface HomeScreenProps {
  menuItem: MenuItem | null; 
  navigation: NavigationProp<any>; 
}

const HomeScreen: React.FC<HomeScreenProps> = ({ menuItem, navigation }) => {
  console.log("HomeScreen rendered, menuItem:", menuItem);

  return (
    <ImageBackground source={require('./assets/six.jpeg')}
    style={styles.background}>
  
    <View style={styles.container}>{}
    <Text style={styles.title}>Christoffell's Menu</Text>

      
      <Text style={styles.Text}>Total Menu Items: {menuItem ? 1 : 0}
</Text>
      {menuItem && (
        <View>
          <Text>Dish Name: {menuItem.dishName}</Text>
          <Text>Description: {menuItem.description}</Text>
          <Text>Course: {menuItem.course}</Text>
          <Text>Price: {menuItem.price}</Text>
        </View>
      )}
      <Button title="Add Menu Item" onPress={() => navigation.navigate('Menu')} />
      
    </View>
    </ImageBackground>
  );
};

const styles=StyleSheet.create({
  background:{ 
    flex:1,
    resizeMode: 'center',
    justifyContent:'center'
  },
  container:{
    flex:1,
    justifyContent:'flex-start',
    fontSize:24,
    padding:1},
    
    title:{
      fontSize:40,
      textAlign:'center',
      fontWeight:'bold',
      marginVertical:20},

      Text:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:20,
        alignItems:'center',
        justifyContent:'center'
      }
    
    
    });

export default HomeScreen;