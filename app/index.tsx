import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import AppScreen from './navigator/appNavigation';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppScreen />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
