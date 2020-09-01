import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { screenNames } from '../constants';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={screenNames.HOME}>
            <Stack.Screen
                name={screenNames.HOME}
                component={Home}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;