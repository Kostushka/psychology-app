import axios from 'axios';

import { API_ROOT } from '@constants/api';

const instance = axios.create({
    baseURL: API_ROOT,
});
export const getApiResource = async (url) => {
    try {
        const res = await instance.get(url);
        return res.data;
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
};
