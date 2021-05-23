import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainStack, {ProfileStack} from '../stack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const _tabBarOptions = {
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    activeBackgroundColor: 'darkred',
    inactiveBackgroundColor: '#000',
    tabStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    labelStyle: {
      fontWeight: 'bold',
      fontSize: 14,
    },
  };

  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={_tabBarOptions}>
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

export default MyTabs;
