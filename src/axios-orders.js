import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-app-my-burger-b5a65-default-rtdb.firebaseio.com/',
});

export default instance;
