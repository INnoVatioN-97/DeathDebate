import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, type, onPress, style }) => {
    // paddings === undefined ? 10 : paddings;
    // bgColor === undefined ? 'red' : bgColor;
    return (
        <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    title: {
        fontSize: 15,
    },
});

export default Button;
