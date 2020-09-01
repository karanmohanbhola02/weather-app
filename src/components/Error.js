import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './error-styles';

const Error = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorText}>{'Something went wrong at our end'}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Error;