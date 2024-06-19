// src/axiosSetup.js
import axios from 'axios';
import { getCsrfToken } from "../Utils/csrf";

const csrfToken = getCsrfToken();

if (csrfToken) {
  axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
}
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;
