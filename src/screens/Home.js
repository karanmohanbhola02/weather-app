import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView from '../components/shared/SafeAreaView';
import WeeklyWeather from '../components/WeeklyWeather';
import CurrentWeather from '../components/CurrentWeather';
import Error from '../components/Error';

import styles from './home-styles';

class Home extends React.PureComponent {

    render() {
        const { hasError } = this.props;
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    {!hasError ?
                        <>
                            <CurrentWeather weather='10' city='Delhi' />
                            <WeeklyWeather />
                        </>
                        :
                        <Error />}
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    weatherData: state.weather.weatherData,
    hasError: state.weather.hasError
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);