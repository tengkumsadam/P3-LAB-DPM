import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ini halaman detail</Text>
      <Button title="kembali" onPress={() => navigate('Home')} />
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
});

export default DetailScreen;
