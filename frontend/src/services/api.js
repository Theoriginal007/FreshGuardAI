import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

export const fetchPredictionFromAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/predict`);
    return response;
  } catch (error) {
    console.error('API fetch prediction error:', error);
    throw new Error('Failed to fetch prediction from API');
  }
};

export const uploadImageToAPI = async (image) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, { image });
    return response;
  } catch (error) {
    console.error('API upload image error:', error);
    throw new Error('Failed to upload image to API');
  }
};
