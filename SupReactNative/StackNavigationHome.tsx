import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types';
import Feed from './screens/feed';
import ProfileScreen from './screens/profileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackNavigationHome = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Feed' component={Feed} />
          <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default stackNavigationHome;