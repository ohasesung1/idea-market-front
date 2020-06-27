import React from 'react';
import { observer, inject } from 'mobx-react';
// import MarketTemplate from 'components/Market/MarketTemplate';


const MarketContainer = ({ store }) => {
  return (
    <div>
      
    </div>
  );
};

export default inject('store')(observer(MarketContainer));
