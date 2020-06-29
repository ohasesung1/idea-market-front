import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import UploadRepository from './UploadRepository';

@autobind
class UploadStore {
  @action
  async uploadImage(request) {
    try {
      const response = await UploadRepository.uploadImage(request);
      
      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
}

export default UploadStore;