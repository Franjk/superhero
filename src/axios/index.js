import axios from 'axios';

const accessToken = '4695976300416765';

const instance = axios.create({
  baseURL: `https://superheroapi.com/api.php/${accessToken}`,
});

export default instance;
