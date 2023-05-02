import axios from "axios";

import {API_ADDRESS} from '@env';

const baseURL = API_ADDRESS || "/";
let token = "";

// const ISSERVER = typeof window === "undefined";

// if(!ISSERVER) {
//   // Access localStorage
//   token = localStorage.getItem('token') || "";
// }

const Axios = axios.create({
  baseURL,
  // headers: {
  //   Authorization: `Token ${token}`,
  //   // Accept: 'application/json'
  // }
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('>> ERR: ', error);
    if (error.response.status === 401) {
      // window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default Axios;
