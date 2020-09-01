import actions from '../constants';
import ui from './ui';
import APISauce from '../../apis/APISauce';
import { api } from '../../constants';
import { getWeeklyWeatherData as getWeeklyWeatherDataUtils } from '../../utils/utils';

const getWeeklyWeatherData = (latitude, longitude) => {
    return async (dispatch) => {
        dispatch(ui.handleLoader(true));
        try {
            const result = await new APISauce({ baseURL: api.BASE_URL }).get(`${api.GET_WEATHER}?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.APP_ID}`);
            if(result.ok) {
                const weeklyWeatherData = getWeeklyWeatherDataUtils(result.data.list);

                dispatch({
                    type: actions.GET_WEEKLY_WEATHER_DATA,
                    weeklyWeatherData,
                    hasError: false
                });
            } else {
                throw new Error('API Failed');
            }
        } catch (e) {
            dispatch({
                type: actions.GET_WEEKLY_WEATHER_DATA,
                weeklyWeatherData: null,
                hasError: true
            });
        }
        dispatch(ui.handleLoader(false));
    }
}

const getCurrentWeatherData = (latitude, longitude) => {
    return async (dispatch) => {
        dispatch(ui.handleLoader(true));
        try {
            const result = await new APISauce({ baseURL: api.BASE_URL }).get(`${api.GET_CURRENT_WEATHER}?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.APP_ID}`);
            if(result.ok) {
                const currentWeatherData = {
                    cityName: result.data.name,
                    weather: result.data.main.temp
                }

                dispatch({
                    type: actions.GET_CURRENT_WEATHER_DATA,
                    currentWeatherData,
                    hasError: false
                });
            } else {
                throw new Error('API Failed');
            }
        } catch (e) {
            dispatch({
                type: actions.GET_CURRENT_WEATHER_DATA,
                currentWeatherData: null,
                hasError: true
            });
        }
        dispatch(ui.handleLoader(false));
    }
}

export default {
    getWeeklyWeatherData,
    getCurrentWeatherData
}