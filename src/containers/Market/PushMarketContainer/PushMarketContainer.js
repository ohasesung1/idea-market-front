import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import MarketItem from 'components/Market/MarketItem';
import MarketTemplate from 'components/Market/MarketTemplate';
import usePending from 'lib/HookState/usePending';

const page = 1;
const GET_ITEM_KEY_WORD = 'push';
let limit = 10;

const PushMarketContainer = ({ store }) => {
  const { getMarketItemByCategory, pushMarketList } = store.marketStore;

  const [feeds, setFeeds] = useState([]);

  
  const fetchData = async () => {
    await getMarketItemByCategory(page, limit, GET_ITEM_KEY_WORD);
  };

  const getMoreData = async () => {
    limit += 10;
    await getMarketItemByCategory(page, limit, GET_ITEM_KEY_WORD);
  };

  const handleFeedsData = () => {
    setFeeds(pushMarketList.map((item) => <MarketItem key={item.idx} item={item}/>))
  };

  const [isLoading, getData] = usePending(fetchData);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    handleFeedsData();
  }, [pushMarketList]);

  return (
    <MarketTemplate getMoreData={getMoreData} title={'추천 순 상품 보기'}>
      {
        feeds
      }
    </MarketTemplate>
  );
};

export default inject('store')(observer(PushMarketContainer));
