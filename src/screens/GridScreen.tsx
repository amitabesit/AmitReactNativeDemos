import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type GridScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Grid'>;

const GridScreen = () => {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = (screenWidth - 40) / numColumns;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {numbers.map((number) => (
          <View
            key={number}
            style={[styles.numberBox, { width: itemWidth }]}>
            <Text style={styles.number}>{number}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  numberBox: {
    height: 100,
    backgroundColor: '#2196F3',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  number: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GridScreen; 