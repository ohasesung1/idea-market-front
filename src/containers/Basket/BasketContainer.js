import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import usePending from 'lib/HookState/usePending';
import BasketItem from 'components/Basket/BasketItem';
import BasketTemplate from 'components/Basket/BasketTemplate';

const BasketContainer = ({ store }) => {

  const { getBaskets, marketBasketList, deleteBasket } = store.marketStore;
  const { modal } = store.dialog;

  const [feeds, setFeeds] = useState([]);

  const handelDeleteBasket = async (idx) => {
    await deleteBasket(idx).
      then(response => {
        modal({
          title: 'Success!',
          stateType: 'success',
          contents: '장바구니 삭제.'
        });
        getData();
      })
      .catch(error => {
        const { status } = error.response;
        if (status === 500) {
          modal({
            title: 'Warning!',
            stateType: 'warning',
            contents: '서버 에러.'
          });

          return;
        }
      });
  };

  const fetchData = async () => {
    await getBaskets();
  };

  const setItemData = () => {
    setFeeds(marketBasketList.map((item) => <BasketItem key={item.idx} item={item} handelDeleteBasket={handelDeleteBasket}/>))
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