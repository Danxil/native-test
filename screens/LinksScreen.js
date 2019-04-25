import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const LinksScreen = () => (
  <ScrollView style={styles.container}>
    <ExpoLinksView />
  </ScrollView>
);
export default LinksScreen;
