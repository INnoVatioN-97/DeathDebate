import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/routes/Home';
import Login from './src/routes/Login';
import AddDebate from './src/routes/AddDebate';
import ListDebates from './src/routes/ListDebates';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} navigation={navigator} />
                <Stack.Screen name="Login" component={Login} navigation={navigator} />
                <Stack.Screen name="AddDebate" component={AddDebate} navigation={navigator} />
                <Stack.Screen name="ListDebates" component={ListDebates} navigation={navigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
