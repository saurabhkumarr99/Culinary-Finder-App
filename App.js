import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigatorSKR from './allComponentsSKR/DrawerNavigatorSKR';
import { AuthProviderSKR } from './allComponentsSKR/AuthContextSKR';

const App = () => {
  return (

    <AuthProviderSKR>
      <NavigationContainer>
        <DrawerNavigatorSKR />
      </NavigationContainer>
    </AuthProviderSKR>

  );
};

export default App;
