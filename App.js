import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/routes/Home';
import Login from './src/routes/Login';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} navigation={navigator} />
                <Stack.Screen name="Login" component={Login} navigation={navigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
