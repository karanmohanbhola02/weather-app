import actions from '../constants';
import ui from './ui';

const getWeatherData = () => {
    return (dispatch) => {
        dispatch(ui.handleLoader(true));

        setTimeout(() => {
            dispatch(ui.handleLoader(false));
        }, 1000); 
    }
}

export default {
    getWeatherData
}