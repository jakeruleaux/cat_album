import catAPI from '../apis/catAPI';

export const fetchCats =() => async dispatch => {
    console.log('action')
    const response = await catAPI.get('https://api.thecatapi.com/v1/images/search')
    console.log(response, 'response')
   dispatch({ type: 'FETCH_CATSS', payload: response.data });

};