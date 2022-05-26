import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://apifakeprojetointegrador.azurewebsites.net/'
});

export default api;