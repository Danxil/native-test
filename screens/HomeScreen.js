import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { compose, lifecycle } from 'recompose';

import withUser from '../redux/containers/withUser';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
  </View>
);
export default compose(
  withUser(),
  lifecycle({
    componentDidMount() {
      this.props.getUserInfo();
    },
  }),
)(HomeScreen);
