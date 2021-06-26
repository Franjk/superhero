import axios from 'axios';

const axiosAlkemyAPIInstance = axios.create({
  baseURL: 'http://challenge-react.alkemy.org/',
});

export default axiosAlkemyAPIInstance;
