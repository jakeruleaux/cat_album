import catAPI from '../apis/catAPI';

export const fetchCats =() => async dispatch => {
    const response = await catAPI.get('https://api.thecatapi.com/v1/images/search')

   dispatch({ type: 'FETCH_CATS', payload: response.data });

};