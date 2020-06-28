import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MyInfoRepository from './myInfoRepository';

@autobind
class MarketStore {
  @observable myInfo = {};

  @action
  async getMyInfo() {
    try {
      const response = await MyInfoRepository.getMyInfo();

      this.myInfo = response.data.member;

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

export default MarketStore;