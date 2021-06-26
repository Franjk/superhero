import axios from 'axios';

const accessToken = '4695976300416765';

const axiosSuperheroAPIInstance = axios.create({
  baseURL: `https://superheroapi.com/api.php/${accessToken}`,
});

export default axiosSuperheroAPIInstance;
