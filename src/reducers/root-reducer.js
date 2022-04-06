import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import matchReducer from "./match-reducer";
import ranNumReducer from "./rannum-reducer";

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                ...action.payload,
            };
        default: {
            const combineReducer = combineReducers({
                ranNumReducer,
                matchReducer
            });
            return combineReducer(state, action);
        }
    }
};

export default rootReducer;