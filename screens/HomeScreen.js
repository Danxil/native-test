import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} />
    <View style={styles.tabBarInfoContainer} />
  </View>
);
export default HomeScreen;
