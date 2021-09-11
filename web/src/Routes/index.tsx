import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTab.routes';
import Detail from '../pages/stack/Detail';

const AppStack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
      initialRouteName="BottomTabs"
    >
      <AppStack.Screen name="BottomTabs" component={BottomTabs} />
      <AppStack.Screen name="Detail" component={Detail} />
    </AppStack.Navigator>
  );
};

export default StackRoutes;
