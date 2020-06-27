import axios from 'axios';
import { SERVER } from 'config/config.json';

class SignRepository {
  async handleSignIn (request) {
    try {
      const { data } = await axios.post(`${SERVER}/auth/login`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new SignRepository();