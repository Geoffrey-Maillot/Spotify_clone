import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.spotify',
  timeout: 3000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
  }
});

