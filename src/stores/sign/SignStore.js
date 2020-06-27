import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import SignRepository from './SignRepository';

@autobind
class SignStore {
  @action
  async handleSignIn(request) {
    try {
      const response = await SignRepository.handleSignIn(request);
      
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

export default SignStore;