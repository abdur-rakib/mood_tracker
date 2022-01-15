import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './navigation/BottomTabsNavigator';
import {AppProvider} from './AppProvider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
