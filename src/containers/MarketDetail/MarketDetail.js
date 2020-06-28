import React, { useEffect } from 'react';
import usePending from 'lib/HookState/usePending';
import MarketDetailTemplate from 'components/MarketDetail';
import { inject, observer } from 'mobx-react';

const MarketDetail = ({ store }) => {

  const { getMarketDetail, marketDetail } = store.marketStore;

  const idx = localStorage.getItem('idea-market-idx');

  const fetchData = async () => {
    await getMarketDetail(idx);
  };

  useEffect(() => {
    getData();
  }, []);

  const [isLoading, getData] = usePending(fetchData);

  return (
    <MarketDetailTemplate
      item={marketDetail}
    />
  );
};

export default inject('store')(observer(MarketDetail));