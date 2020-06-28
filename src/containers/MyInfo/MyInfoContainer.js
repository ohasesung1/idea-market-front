import React, { useEffect } from 'react';
import MyInfoTemplate from 'components/MyInfo/MyInfoTemplate';
import usePending from 'lib/HookState/usePending';
import { inject, observer } from 'mobx-react';


const MyInfoContainer = ({ store }) => {
  const { getMyInfo, myInfo } = store.myInfoStore;
  
  const fetchData =  async () => {
    await getMyInfo();
  };

  useEffect(() => {
    fetchData();
  }, []);


  
  return (
    <MyInfoTemplate myInfo={myInfo}/>
  );
};

export default inject('store')(observer(MyInfoContainer));
