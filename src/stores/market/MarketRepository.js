import axios from 'axios';
import { SERVER } from 'config/config.json';
import TokenVerification from 'lib/Token/TokenVerification';

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

  async writeMarket (request) {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('idea-market-token') : sessionStorage.getItem('idea-market-token');

    try {
      const { data } = await axios.post(`${SERVER}/market/`, request, {
        headers: {
          'x-access-token' : token, 
        }
      });
      
      return data;
    } catch (error) {
      throw error;
    }
  }

  async addBasket (marketIdx) {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('idea-market-token') : sessionStorage.getItem('idea-market-token');

    try {
      const { data } = await axios.post(`${SERVER}/market/basket`, marketIdx, {
        headers: {
          'x-access-token' : token, 
        }
      });
      
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  async getBaskets () {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('idea-market-token') : sessionStorage.getItem('idea-market-token');

    try {
      const { data } = await axios.get(`${SERVER}/market/basket`, {
        headers: {
          'x-access-token' : token, 
        }
      });
      
      return data;
    } catch (error) {
      throw error;
    }
  }

    
  async deleteBasket (idx) {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('idea-market-token') : sessionStorage.getItem('idea-market-token');

    try {
      const { data } = await axios.delete(`${SERVER}/market/basket?idx=${idx}`, {
        headers: {
          'x-access-token' : token, 
        }
      });
      
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new MarketRepository();