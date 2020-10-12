import catAPI from '../apis/catAPI';

export const fetchCats =() => async dispatch => {
    const response = await catAPI.get('/search?limit=20&size=med')

    dispatch({ type: 'FETCH_CATS', payload: response.data });

};

export const sendCats =() => async dispatch => {
    console.log('action2')
    const response = await catAPI.post('/upload')
    console.log('action2', response)
    dispatch({ type: 'SEND_CATS', payload: response.data });

};