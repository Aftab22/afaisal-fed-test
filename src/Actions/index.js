import {FETCH_DATA, FETCH_DATA_LOADING_SUCCESS, FETCH_DATA_LOADING_FAILURE, FETCH_DATA_LOADING, rootURL} from '../Constants';

export const fetchData = (pageNumber) => {
    return (dispatch) => {
        dispatch(fetchDataLoading(true));

        fetch(`${rootURL}page=${pageNumber}&results=5`)
            .then(response => {
                dispatch(fetchDataLoading(false));  
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(fetchDataSuccess(items.results)))
            .catch(error => dispatch(fetchDataFailure(error)))
    }

}

export const fetchDataLoading = (status) => {
    return {
        type: FETCH_DATA_LOADING,
        status
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_LOADING_SUCCESS,
        payload:data
    }
}

export const fetchDataFailure = (status) => {
    return {
        type: FETCH_DATA_LOADING_FAILURE,
        payload:status
    }
}
