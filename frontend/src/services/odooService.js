import config from '../config'
import axios from 'axios'

const url = config.apiKey
    
export const fetchProducts = async () => {
    try {
      const response = await axios.post(`${url}/web/dataset/call_kw/product.product/search_read`, {
        jsonrpc: '2.0',
        method: 'call',
        params: {
          model: 'product.product',
          fields: ['name', 'list_price'],
          domain: [],
        },
      });
      return response.data.result;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };