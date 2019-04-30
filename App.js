import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Constants,
} from 'expo';
import { withState, withHandlers, compose } from 'recompose';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import AppNavigator from './components/AppNavigator';

import exceptionsHandler from './helpers/exceptionsHandler';
import configureStore from './redux/configureStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});

const App = ({
  loadResourcesAsync,
  loadResourcesSuccess,
  isLoadingComplete,
}) => {
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={exceptionsHandler}
        onFinish={loadResourcesSuccess}
      />
    );
  }
  return (
    <Provider store={configureStore()}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar style={styles.statusBar} />}
        <AppNavigator />
      </View>
    </Provider>
  );
};

App.propTypes = {
  loadResourcesSuccess: PropTypes.func.isRequired,
  loadResourcesAsync: PropTypes.func.isRequired,
  isLoadingComplete: PropTypes.bool.isRequired,
};

export default compose(
  withState('isLoadingComplete', 'setIsLoadingComplete', false),
  withHandlers({
    loadResourcesSuccess: ({ setIsLoadingComplete }) => () => setIsLoadingComplete(true),
    loadResourcesAsync: () => async () => Promise.all([
      Asset.loadAsync([
        // eslint-disable-next-line global-require
        require('./assets/images/robot-dev.png'),
        // eslint-disable-next-line global-require
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync([
        // eslint-disable-next-line global-require
        require('./assets/fonts/SpaceMono-Regular.ttf'),
      ]),
    ]),
  }),
)(App);
