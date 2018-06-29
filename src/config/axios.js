import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ironmanon-react.firebaseio.com/'
});

export default instance;
