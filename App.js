import React, { useState, useCallback } from 'react';
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
} from 'expo';
import exceptionsHandler from './helpers/exceptionsHandler';

const assetPathsOfApp = {
  assetPaths: [
    './assets/images/robot-dev.png',
    './assets/images/robot-prod.png',
  ],
  fontPaths: [
    './assets/fonts/SpaceMono-Regular.ttf',
  ],
};

const loadResourcesAsyncWithExpo = async ({ assetPaths, fontPaths }) => Promise.all([
  // eslint-disable-next-line global-require,import/no-dynamic-require
  Asset.loadAsync(assetPaths.map(assetPath => require(assetPath))),
  // eslint-disable-next-line global-require,import/no-dynamic-require
  Font.loadAsync((fontPaths.map(assetPath => require(assetPath)))),
]);
const handleLoadingSuccess = ({ setIsLoadingComplete }) => {
  setIsLoadingComplete(true);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = ({
  assetPaths = assetPathsOfApp,
  loadResourcesAsync = loadResourcesAsyncWithExpo,
  handleLoadingError = exceptionsHandler,
}) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const startAsync = useCallback(() => loadResourcesAsync({ ...assetPaths }));
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={startAsync}
        onError={handleLoadingError}
        onFinish={useCallback(() => handleLoadingSuccess({ setIsLoadingComplete }), [])}
      />
    );
  }
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
    </View>
  );
};
export default App;
