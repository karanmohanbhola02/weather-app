import React from 'react';
import { SafeAreaView as NativeSafeAreaView } from 'react-native';

import styles from './safeAreaView-styles';

const SafeAreaView = ({ children }) => {
    return (
        <NativeSafeAreaView style={styles.container}>
            {children}
        </NativeSafeAreaView>
    );
};

export default SafeAreaView;