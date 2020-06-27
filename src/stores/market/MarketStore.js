import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import SignRepository from './SignRepository';

@autobind
class MarketStore {
  @observable marketList = [];

  @action
  async getMarketPushItem(page, limit) {
    try {
      const response = await SignRepository.getMarketPushItem(page, limit);
      
      this.marketList = response.data.market;

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