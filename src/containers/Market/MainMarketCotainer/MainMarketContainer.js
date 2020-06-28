import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import MarketItem from 'components/Market/MarketItem';
import MarketTemplate from 'components/Market/MarketTemplate';
import usePending from 'lib/HookState/usePending';
import PropTypes from 'prop-types';

let limit = 10;
const page = 1;

const MainMarketContainer = ({ store }) => {
  const { getMarketItem, marketList } = store.marketStore;

  const [feeds, setFeeds] = useState([]);

  const fetchData = async () => {
    await getMarketItem(page, limit);
  };

  const getMoreData = async () => {
    limit += 10;
    await getMarketItem(page, limit);
  };

  const handleFeedsData = () => {
    setFeeds(marketList.map((item) => <MarketItem key={item.idx} item={item}/>))
  };

  const [isLoading, getData] = usePending(fetchData);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    handleFeedsData();
  }, [marketList]);

  return (
    <>
      <MarketTemplate getMoreData={getMoreData} title={'최신 순 상품 보기'}>
        {
          feeds
        }
      </MarketTemplate>
    </>
  );
};

MainMarketContainer.propTypes = {
  store: PropTypes.any,
};

export default inject('store')(observer(MainMarketContainer));