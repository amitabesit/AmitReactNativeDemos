import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, NativeModules, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

// Import the grid icon image
import GridIcon from '../../assets/amit_grid_icon.png';

const { GeocoderModule } = NativeModules;

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [latLng, setLatLng] = useState('28.459300065398406,77.07254121934044');
  const [timeTaken, setTimeTaken] = useState<number | null>(null);

  const handleOpenGrid = () => {
    navigation.navigate('Grid');
  };

  const handleGetAddress = async () => {
    setLoading(true);
    setAddress('');
    setTimeTaken(null);
    try {
      const [latStr, lngStr] = latLng.split(',').map(s => s.trim());
      const lat = parseFloat(latStr);
      const lng = parseFloat(lngStr);
      if (isNaN(lat) || isNaN(lng)) {
        setAddress('Invalid latitude or longitude');
        setLoading(false);
        return;
      }
      const start = Date.now();
      const result = await GeocoderModule.getAddress(lat, lng);
      const end = Date.now();
      setAddress(result);
      setTimeTaken(end - start);
    } catch (e: any) {
      setAddress('Error: ' + (e.message || e));
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenGrid}>
        <View style={styles.buttonContent}>
          <Image source={GridIcon} style={styles.icon} />
          <Text style={styles.buttonText}>Open Grid</Text>
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={latLng}
        onChangeText={setLatLng}
        placeholder="Enter lat,long"
        keyboardType="numbers-and-punctuation"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={handleGetAddress}>
        <Text style={styles.buttonText}>Get Address</Text>
      </TouchableOpacity>
      {loading && <Text style={styles.infoText}>Fetching address...</Text>}
      {!!address && (
        <Text style={styles.infoText}>
          {address}
          {timeTaken !== null && `\nTime taken: ${timeTaken} ms`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  input: {
    width: 260,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    marginTop: 16,
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 300,
  },
});

export default HomeScreen; 