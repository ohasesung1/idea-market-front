import React, { useEffect } from 'react';
import usePending from 'lib/HookState/usePending';
import MarketDetailTemplate from 'components/MarketDetail';
import { inject, observer } from 'mobx-react';

const MarketDetail = ({ store }) => {

  const { getMarketDetail, marketDetail, addBasket } = store.marketStore;
  const { modal } = store.dialog;

  const idx = localStorage.getItem('idea-market-idx');

  const fetchData = async () => {
    await getMarketDetail(idx);
  };

  const handleBasket = async () => {
    let data = {
      marketIdx: idx,
    };
    await addBasket(data).
      then(response => {
        modal({
          title: 'Success!',
          stateType: 'success',
          contents: '장 바구니 추가 성공!!'
        })
      }).catch(error => {
        const { status } = error.response;

        if (status === 400) {
          modal({
            title: 'Warning!',
            stateType: 'warning',
            contents: '이미 장 바구니에 추가되었습니다.'
          });

          return;
        }

        
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

  useEffect(() => {
    getData();
  }, []);

  const [isLoading, getData] = usePending(fetchData);

  return (
    <MarketDetailTemplate
      item={marketDetail}
      handleBasket={handleBasket}
    />
  );
};

export default inject('store')(observer(MarketDetail));