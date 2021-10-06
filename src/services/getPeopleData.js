// import {
//     API_PEOPLE,
//     HTTPS,
//     HTTP,
//     API,
//     GUIDE_URL_IMG,
//     GUIDE_PEOPLE,
//     GUIDE_EXTENSION,
// } from '../constants/api';

// const checkProtokol = (url) => {
//     if (url.indexOf(HTTPS) !== -1) {
//         return HTTPS;
//     }
//     return HTTP;
// };

// const getId = (url, category) => {
//     const protocol = checkProtokol(url);
//     const id = url.replace(protocol + API + category, '').replace(/\//g, '');
//     return id;
// };

// export const getPeopleId = (url) => getId(url, API_PEOPLE);

// export const getPeopleImage = (id) =>
//     `${GUIDE_URL_IMG}${GUIDE_PEOPLE}/${id + GUIDE_EXTENSION}`;
