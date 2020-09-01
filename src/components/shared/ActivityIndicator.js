import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './activityIndicator-styles';

const ActivityIndicator = ({ isLoaderActive }) => {
    if (isLoaderActive) {
        return (
            <View style={styles.container}>
                <FastImage
                    style={styles.loader}
                    source={require('../../assets/gifs/loader.gif')}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
        );
    } else {
        return null;
    }
};

export default ActivityIndicator;