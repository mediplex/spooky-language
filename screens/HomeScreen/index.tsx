import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
// import { UnitCard } from '../../components/UnitCard';
import { Button } from 'react-native-paper';

export const HomeScreen = ({ navigation }) => {
  console.log('[HOME SCREEN]');
  return (
    <View styles={styles.container}>
      <ScrollView>
        <Button mode="contained" onPress={() => navigation.navigate('UnitListScreen', {})}>
          Shit
        </Button>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'stretch',
    // justifyContent: 'flex-start',
    padding: 8
  }
});
