import catAPI from '../apis/catAPI';

export const fetchCats =() => async dispatch => {
    const response = await catAPI.get('/search?limit=20&size=med')

    dispatch({ type: 'FETCH_CATS', payload: response.data });

};

// TODO: figure out how to upload images
export const sendCats =() => async dispatch => {
    const response = await catAPI.post('/upload')
    dispatch({ type: 'SEND_CATS', payload: response.data });

};