import React from 'react';
import { IoMdLocate, IoIosList, IoIosChatbubbles } from 'react-icons/io';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Map from '../pages/tab/Map';
import List from '../pages/tab/List';
import Contact from '../pages/tab/Contact';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'Mapa') {
          return <IoMdLocate size={size} color={color} />;
        }
        if (route.name === 'Lista') {
          return <IoIosList size={size} color={color} />;
        }
        if (route.name === 'Contatos') {
          return <IoIosChatbubbles size={size} color={color} />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#2F80ED',
      inactiveTintColor: '#BDBDBD',
      style: {
        paddingHorizontal: 48,
        height: 60,
        backgroundColor: '#191b1a',
        borderTopColor: '#191b1a',
      },
      tabStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 4,
        backgroundColor: '#191b1a',
        borderTopColor: '#191b1a',
      },
      labelStyle: {
        fontSize: 10,
        marginBottom: 6,
        backgroundColor: '#191b1a',
        borderTopColor: '#191b1a',
      },
    }}
    initialRouteName="Lista"
  >
    <Tab.Screen name="Mapa" component={Map} />
    <Tab.Screen name="Lista" component={List} />
    <Tab.Screen name="Contatos" component={Contact} />
  </Tab.Navigator>
);

export default TabRoutes;
