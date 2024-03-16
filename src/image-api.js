//npm install axios
import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
  client_id: 'Z_AJ42tCYRi9ez9R3kTo14ZRpWfnHT2xNXTyYUKcP6Q',
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