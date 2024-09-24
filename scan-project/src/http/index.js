import axios from 'axios'

import { BASE_URL } from '../global_const.js';

const $api = axios.create({
    baseURL: BASE_URL, 
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;