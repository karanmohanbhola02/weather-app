import actions from '../constants';

const initialState = {
    currentWeatherData: null,
    weeklyWeatherData: null,
    hasError: false
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_CURRENT_WEATHER_DATA:
            return {
                ...state,
                currentWeatherData: action.currentWeatherData,
                hasError: action.hasError
            };
        case actions.GET_WEEKLY_WEATHER_DATA:
            return {
                ...state,
                weeklyWeatherData: action.weeklyWeatherData,
                hasError: action.hasError
            };
        default:
            return state;
    }
};

export default weather;