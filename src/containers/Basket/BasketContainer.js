import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import usePending from 'lib/HookState/usePending';
import BasketItem from 'components/Basket/BasketItem';
import BasketTemplate from 'components/Basket/BasketTemplate';

const BasketContainer = ({ store }) => {

  const { getBaskets, marketBasketList } = store.marketStore;

  const [feeds, setFeeds] = useState([])

  const fetchData = async () => {
    await getBaskets();
  };

  const setItemData = () => {
    setFeeds(marketBasketList.map((item) => <BasketItem key={item.idx} item={item}/>))
  };

  const [loading, getData] = usePending(fetchData);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setItemData();
  }, [marketBasketList]);

  return (
    <BasketTemplate>
      {feeds}
    </BasketTemplate>
  );
};

export default inject('store')(observer(BasketContainer));