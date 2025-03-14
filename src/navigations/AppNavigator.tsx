import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import { RootStackParamList } from './RouteData';
const AppNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    return (
        <>
            <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={BottomNavigation} />
            </Stack.Navigator>
        </>
    )
}

export default AppNavigator