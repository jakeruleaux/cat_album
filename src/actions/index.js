import catAPI from '../apis/catAPI';

export const fetchCats =() => async dispatch => {
    const response = await catAPI.get('/search')

    dispatch({ type: 'FETCH_CATS', payload: response.data });

};

export const sendCats =() => async dispatch => {
    const response = await catAPI.put('/upload')

    dispatch({ type: 'SEND_CATS', payload: response.data });

};