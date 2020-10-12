import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'd8a26c63-f8d5-44e4-93ce-e80444c0a743';

export default axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images'
});