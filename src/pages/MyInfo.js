import React from 'react';
import MyInfoContainer from 'containers/MyInfo/MyInfoContainer';
import PageTemplate from 'components/Common/PageTemplate';

const MyInfo = () => {
  return (
    <PageTemplate url={'/my_info'}>
        <MyInfoContainer />
    </PageTemplate> 
  );
};

export default MyInfo;