import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView from '../components/shared/SafeAreaView';

import styles from './home-styles';

class Home extends React.PureComponent {

    render() {

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Text> Weather App</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);