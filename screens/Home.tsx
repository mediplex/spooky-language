import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export const Home = () => {
  return (
    <View style= {styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
