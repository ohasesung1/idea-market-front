import React from 'react';
import MarketDetailContainer from 'containers/MarketDetail/MarketDetail';
import PageTemplate from 'components/Common/PageTemplate';

const MarketDetail = () => {
  return (
    <PageTemplate url={'/market-detail'}>
        <MarketDetailContainer />
    </PageTemplate> 
  );
};

export default MarketDetail;