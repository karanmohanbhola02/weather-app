import actions from '../constants';
import ui from './ui';
import APISauce from '../../apis/APISauce';
import { api } from '../../constants';

const getWeatherData = (queryParams = {}) => {
    return async (dispatch) => {
        dispatch(ui.handleLoader(true));
        try {
            const result = await new APISauce({ baseURL: api.BASE_URL }).get(`${api.GET_WEATHER}?lat=33.441792&lon=-94.037689&exclude=hourly,minutely&units=metric&appid=${api.APP_ID}`);
            if(result.ok) {
                const daily = result.data.daily.slice(1,6);
                const current = result.data.current;
                dispatch({
                    type: actions.GET_WEATHER_DATA,
                    weatherData: daily,
                    currentWeatherData: current,
                    hasError: false
                });
            } else {
                throw new Error('API Failed');
            }
        } catch (e) {
            dispatch({
                type: actions.GET_WEATHER_DATA,
                weatherData: null,
                currentWeatherData: null,
                hasError: true
            });
        }
        dispatch(ui.handleLoader(false));
    }
}

export default {
    getWeatherData
}