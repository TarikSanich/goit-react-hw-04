import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
  client_id: 'sUDhNPZ0JBVfyUZRvA8ZV_OvcRWtDaaxy3F25lpgTVY',
};
export const fetchImages = async (searchQuery, page) => {
  try {
    const response = await axios.get('/search/photos', {
      params: {
        query: searchQuery,
        per_page: 9,
        page,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
};