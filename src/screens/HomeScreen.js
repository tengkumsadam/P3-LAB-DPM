import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigate }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('HomeScreen Mounted');

    return () => {
      console.log('HomeScreen Unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button title="Kenaikan" onPress={() => setCounter(counter + 1)} />
      <Button title="cek detail" onPress={() => navigate('Detail')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default HomeScreen;
