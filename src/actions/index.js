import catAPI from './apis/catAPI';

export const fetchCats =() => async dispatch => {
    const response = await catAPI.get('/images');

   dispatch({ type: 'FETCH_CATSS', payload: response.data });

};