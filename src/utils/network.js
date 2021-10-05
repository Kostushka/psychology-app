import axios from 'axios';

const API_CHARACTERS = 'characters';

const instance = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/',
    // baseURL: 'https://www.anapioficeandfire.com/api',
    // baseURL: 'https://swapi.dev/api/',
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

(async () => {
    await getApiResource(API_CHARACTERS);
})();
