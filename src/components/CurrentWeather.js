import React from 'react';
import { View, Text } from 'react-native';

import styles from './currentWeather-styles';

const CurrentWeather = ({ currentWeatherData }) => {

    const weather = currentWeatherData.temp;
    const city = '';

    return (
        <View style={styles.container}>
            <Text style={styles.weather}>{weather}</Text>
            <Text style={styles.city}>{city}</Text>
        </View>
    );
};

export default CurrentWeather;