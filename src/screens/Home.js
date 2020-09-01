import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView from '../components/shared/SafeAreaView';
import WeeklyWeather from '../components/WeeklyWeather';
import CurrentWeather from '../components/CurrentWeather';
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Error from '../components/Error';
import { weather } from '../store/actions';

import styles from './home-styles';

class Home extends React.PureComponent {

    componentDidMount() {
        this.props.getWeatherData();
    }

    render() {
        const { hasError, isLoading, currentWeatherData, weatherData } = this.props;
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    {!hasError ?
                        <>
                            {currentWeatherData ? <CurrentWeather currentWeatherData={currentWeatherData} /> : null}
                            {weatherData ? <WeeklyWeather weatherData={weatherData} /> : null}
                        </>
                        :
                        <Error />}
                </View>
                <ActivityIndicator isLoaderActive={isLoading} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    currentWeatherData: state.weather.currentWeatherData,
    weatherData: state.weather.weatherData,
    hasError: state.weather.hasError,
    isLoading: state.ui.isLoading
});

const mapDispatchToProps = {
    getWeatherData: weather.getWeatherData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);