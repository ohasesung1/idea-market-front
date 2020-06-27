import axios from 'axios';
import { SERVER } from 'config/config.json';

class MarketRepository {
  async getMarketPushItem (page, limit) {
    try {
      const { data } = await axios.get(`${SERVER}/market?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new MarketRepository();