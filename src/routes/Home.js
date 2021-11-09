import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={{ textAlign: 'center' }}>사망토론 앱</Text>
            </View>
            <View style={styles.mainScreen}>
                {/* <Text>mainScreen</Text> */}
                <Button title="토론방으로 입장" style={styles.enterDebateList} onPress={() => navigation.navigate('ListDebates')} />
                <Button title="새 토론 생성하기" style={styles.addDebate} onPress={() => navigation.navigate('AddDebate')} />
            </View>
            <View style={styles.bottomBar}>
                {/* <Text style={styles.button} onPress={() => navigation.navigate('Login')}>
                    LOGIN
                </Text> */}
                <Button title="LOGIN" onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingBottom: '2%',
    },
    topBar: {
        backgroundColor: 'tomato',
        flex: 1,
        justifyContent: 'center',
    },
    mainScreen: {
        backgroundColor: 'teal',
        flex: 8,
        justifyContent: 'center',
    },
    bottomBar: {
        // backgroundColor: 'yellow',
        flex: 1,
        // height: '100%',
        // alignContent: 'stretch',
        // flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        textAlign: 'center',
    },
    enterDebateList: {
        padding: 10,
        margin: 10,
        backgroundColor: 'green',
    },
    addDebate: {
        padding: 10,
        margin: 10,
        backgroundColor: 'orange',
    },
});

export default Home;
