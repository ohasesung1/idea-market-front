import React from 'react';
import MarketContainer from 'containers/Market/MarketContainer';
import PageTemplate from 'components/Common/PageTemplate';

const Market = () => {
  return (
    <PageTemplate url={'/'}>
        <MarketContainer />
    </PageTemplate> 
  );
};

export default Market;