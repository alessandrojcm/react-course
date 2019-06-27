// Same here, bad practice.
import axios from 'axios';

const API_KEY = 'AIzaSyDGrryd6L2XYUAUOqkVyvmagmeqYAeDtf8';

const youtubeAPI = axios.create({
  baseURL: ' https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});

export default youtubeAPI;
