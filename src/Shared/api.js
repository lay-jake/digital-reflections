import axios from "axios";


const AUTH_TOKEN = '5cfe0fea-a504-4ee4-8f88-baf84aeabef2';
const BASE_URL = 'https://api.pathfinder2.fr/v1/pf2/';

/* Set Axios Default URL and API Key */
const instance = axios.create({
    baseURL:BASE_URL,
    headers:{"Content-Type":'application/json',
            'Authorization':AUTH_TOKEN}
})

export default instance;