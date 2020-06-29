import axios from 'axios';
import { SERVER } from 'config/config.json';

class UploadRepository
 {
  async uploadImage (request) {
    try {
      const { data } = await axios.post(`${SERVER}/upload/image`, request);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new UploadRepository
();