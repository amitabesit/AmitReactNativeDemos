import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';

const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth - 30) / numColumns;

const HomeScreen = () => {
  const renderItem = ({ item }: { item: number }) => (
    <View style={[styles.gridItem, { width: itemWidth }]}>
      <Text style={styles.number}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    padding: 10,
  },
  gridItem: {
    height: 100,
    margin: 5,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  number: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen; 