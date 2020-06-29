import React from 'react';
import BasketContainer from 'containers/Basket/BasketContainer';
import PageTemplate from 'components/Common/PageTemplate';

const Basket = () => {
  return (
    <PageTemplate url={'/basket'}>
        <BasketContainer />
    </PageTemplate> 
  );
};

export default Basket;