import actions from '../constants';

const handleLoader = (value) => {
    return {
        type: actions.SET_LOADING_STATE,
        value
    }
}

export default {
    handleLoader
}