import React from 'react';
import { View, FlatList } from 'react-native';
import DailyWeather from './DailyWeather';
import SectionSeparator from './shared/SectionSeparator';
import date from '../utils/date';

import styles from './weeklyWeather-styles';

const WeeklyWeather = ({ weatherData }) => {

    const renderItem = ({ item }) => {
        const weekDay = date.getDay(item.dt);
        const weather = item.temp.day;
        return <DailyWeather weekDay={weekDay} weather={weather} />;
    };

    const renderItemSeparatorComponent = () => <SectionSeparator />;

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={weatherData}
                ItemSeparatorComponent={renderItemSeparatorComponent}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
            />
        </View>
    );
};

export default WeeklyWeather;