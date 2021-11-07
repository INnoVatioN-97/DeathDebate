import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text>사망토론 앱</Text>
            </View>
            <View style={styles.mainScreen}>
                <Text>mainScreen</Text>
            </View>
            <View>
                <Button title="LOGIN" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '2%',
    },
    topBar: {
        flex: 1,
        justifyContent: 'center',
    },
    mainScreen: {
        flex: 9,
        justifyContent: 'center',
    },
    bottomBar: {
        flex: 1,
    },
});

export default Home;
