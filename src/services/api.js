import axios from 'axios';

const api = axios.create({
    baseURL: 'http://teste-unicad-api.herokuapp.com/api'
});

export default api;