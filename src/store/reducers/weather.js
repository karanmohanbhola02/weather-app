import actions from '../constants';

const initialState = {
    weatherData: null
};

const weather = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload
            };
        default:
            return state;
    }
};

export default weather;