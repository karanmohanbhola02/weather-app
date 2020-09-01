import { combineReducers } from 'redux';
import weather from './weather';
import ui from './ui';

const rootReducers = combineReducers({
    weather,
    ui
});

export default rootReducers;