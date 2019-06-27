const liveStreamUrl = (id) => `http://localhost:8000/live/${id}.flv`;

export const environment = {
  liveStreamUrl,
  apiUrl: 'http://localhost:3001',
};
