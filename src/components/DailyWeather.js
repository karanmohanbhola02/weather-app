import React from 'react';
import { View, Text } from 'react-native';

import styles from './dailyWeather-styles';

const DailyWeather = ({ weekDay, weather }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.weekDay}>{weekDay}</Text>
            <Text style={styles.weather}>{`${weather}°`}</Text>
        </View>
    );
};

export default DailyWeather;