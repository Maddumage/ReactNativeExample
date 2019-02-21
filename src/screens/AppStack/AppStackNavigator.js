import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

export const AuthStackNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            headerMode: 'none',
            header: null,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'HomeScreen'
    }
);