import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' && <HomeScreen navigate={navigate} />}
      {currentScreen === 'Detail' && <DetailScreen navigate={navigate} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
