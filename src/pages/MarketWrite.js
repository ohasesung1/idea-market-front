import React from 'react';
import MarketWriteContainer from 'containers/MarketWrite/MarketWriteConatiner';
import PageTemplate from 'components/Common/PageTemplate';

const MarketWrite = () => {
  return (
    <PageTemplate url={'/market-write'}>
        <MarketWriteContainer />
    </PageTemplate> 
  );
};

export default MarketWrite;