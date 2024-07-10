import axios from 'axios';
import Storage from '../utils/local-storage';

const httpClient = axios.create({
  baseURL: 'https://api.beeliked.com/v2/',
  timeout: 15000
});

httpClient.interceptors.request.use(async config => {
  const token = Storage.token();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return Promise.resolve(config);
});

httpClient.interceptors.response.use(null, error => {
  if (error.config && error.response && error.response.status === 403) {
    Storage.remove();
    window.location.replace("/")
  }

  return Promise.reject(error);
});

export default httpClient;