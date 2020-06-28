import axios from 'axios';
import { SERVER } from 'config/config.json';

class MarketRepository {
  async getMarketItemByCategory (page, limit, category) {
    try {
      const { data } = await axios.get(`${SERVER}/market?page=${page}&limit=${limit}&category=${category}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getMarketItem (page, limit) {
    try {
      const { data } = await axios.get(`${SERVER}/market?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getMarketDetail (idx) {
    try {
      const { data } = await axios.get(`${SERVER}/market/detail?idx=${idx}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new MarketRepository();