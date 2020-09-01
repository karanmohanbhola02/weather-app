import React from 'react';
import { View, FlatList } from 'react-native';
import DailyWeather from './DailyWeather';
import SectionSeparator from './shared/SectionSeparator';

import styles from './weeklyWeather-styles';

const WeeklyWeather = ({ }) => {

    const renderItem = ({ }) => {
        return <DailyWeather weekDay='Monday' weather='12' />;
    };

    const renderItemSeparatorComponent = () => <SectionSeparator />;

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={[1,2,3,4,5]}
                ItemSeparatorComponent={renderItemSeparatorComponent}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
            />
        </View>
    );
};

export default WeeklyWeather;