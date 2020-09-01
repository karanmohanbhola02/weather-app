import actions from '../constants';

const initialState = {
    currentWeatherData: null,
    weatherData: null,
    hasError: false
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.weatherData,
                currentWeatherData: action.currentWeatherData,
                hasError: action.hasError
            };
        default:
            return state;
    }
};

export default weather;