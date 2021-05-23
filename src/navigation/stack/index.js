import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Comment from '../../screens/Comment.js';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile/index.js';

const Stack = createStackNavigator();

const MainStack = () => {
  const _options = {
    headerTitleAlign: 'center',
    headerStyle: {backgroundColor: '#2078f4'},
    headerTintColor: '#fff',
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={_options} />
      <Stack.Screen name="Comment" component={Comment} options={_options} />
    </Stack.Navigator>
  );
};

export default MainStack;

export const ProfileStack = () => {
  const _options = {
    headerTitleAlign: 'center',
    headerStyle: {backgroundColor: '#2078f4'},
    headerTintColor: '#fff',
  };

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} options={_options} />
    </Stack.Navigator>
  );
};
