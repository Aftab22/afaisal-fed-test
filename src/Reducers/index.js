import {FETCH_DATA,FETCH_DATA_LOADING,FETCH_DATA_LOADING_SUCCESS,FETCH_DATA_LOADING_FAILURE,initialState} from '../Constants';
import { combineReducers } from 'redux';

export const itemReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_DATA_LOADING_SUCCESS:
            return {
                ...state,
                items: state.items.concat(...action.payload),
                pageNumber:state.pageNumber+1
            }
        default:
            return state;
    }
}

export const itemLoading = (state = false,action) => {
    switch(action.type) {
        case FETCH_DATA_LOADING:
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state;
    }
} 

export const itemLoadingError = (state = false,action) => {
    switch(action.type) {
        case FETCH_DATA_LOADING_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    itemReducer,
    itemLoading,
    itemLoadingError
});

export default rootReducer;

