import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      // Obviously bad practice, but this is a tutorial and this is a test key,
      // so actually not that of a big deal
      'Client-ID 6a58d69b6567508749bd0222e591442b2fdf5edc3f8ac6911c8dba822853ad9d',
  },
});
