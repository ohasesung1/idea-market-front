import axios from 'axios';
import { SERVER } from 'config/config.json';
import TokenVerification from 'lib/Token/TokenVerification';

class MyInfoRepository {
  async getMyInfo () {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('idea-market-token') : sessionStorage.getItem('idea-market-token');

    try {
      const { data } = await axios.get(`${SERVER}/auth/my`, {
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

export default new MyInfoRepository();