import React from 'react';

import { Test } from '@screens/test/test';

import { APP_ROUTES } from '@constants/routes';
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={APP_ROUTES.main.test} component={Test} />
    </RootStack.Navigator>
  );
};
