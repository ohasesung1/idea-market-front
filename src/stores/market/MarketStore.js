import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MarketRepository from './MarketRepository';

@autobind
class MarketStore {
  @observable pushMarketList = [];
  @observable marketList = [];
  @observable marketDetail = {};

  @observable marketBasketList = [];

  @action
  async getMarketItemByCategory(page, limit, category) {
    try {
      const response = await MarketRepository.getMarketItemByCategory(page, limit, category);
      
      this.pushMarketList = response.data.market;

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  async getMarketItem(page, limit) {
    try {
      const response = await MarketRepository.getMarketItem(page, limit);

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

  async getMarketDetail(idx) {
    try {
      const response = await MarketRepository.getMarketDetail(idx);

      this.marketDetail = response.data.market;

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  async writeMarket(reqeust) {
    try {
      const response = await MarketRepository.writeMarket(reqeust);

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  async addBasket(marketIdx) {
    try {
      const response = await MarketRepository.addBasket(marketIdx);

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  async getBaskets() {
    try {
      const response = await MarketRepository.getBaskets();
      console.log(response);
      
      this.marketBasketList = response.data.basket;

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  async deleteBasket (idx) {
    try {
      const response = await MarketRepository.deleteBasket(idx);

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