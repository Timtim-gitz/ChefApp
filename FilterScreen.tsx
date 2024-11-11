import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

interface FilterScreenProps {
  menuItems: Array<{ dishName: string; description: string; price: number; course: string }>;
}

const FilterScreen: React.FC<FilterScreenProps> = ({ menuItems }) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const filteredItems = selectedCourse ? 
  menuItems.filter(item => item.course === selectedCourse) 
  : menuItems;

  return (
    <View style={styles.container}>
      <Button title="Show All" onPress={() => setSelectedCourse(null)} />
      <Button title="Show Starters" onPress={() => setSelectedCourse('starter')} />
      <Button title="Show Mains" onPress={() => setSelectedCourse('main')} />
      <Button title="Show Desserts" onPress={() => setSelectedCourse('dessert')} />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.dishName}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.dishName} - R{item.price}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, 
    padding: 10 },
  item: { padding: 10, 
        borderBottomColor: 'gray', borderBottomWidth: 1 }
});

export default FilterScreen;

