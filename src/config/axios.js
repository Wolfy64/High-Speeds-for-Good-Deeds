import axios from 'axios';

const justgivingApi = axios.create({
  baseURL: 'https://api.justgiving.com/v1/',
  headers: {
    'x-api-key': '5b74a57d',
    accept: 'application/json'
  }
});

export default justgivingApi;
