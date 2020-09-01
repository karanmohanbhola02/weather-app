import actions from '../constants';

const initialState = {
    isLoading: false
};

const ui = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_LOADING_STATE:
            return {
                ...state,
                isLoading: action.value
            };
        default:
            return state;
    }
};

export default ui;