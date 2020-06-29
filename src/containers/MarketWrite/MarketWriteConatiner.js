import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import GroupingState from 'lib/HookState/GroupingState';
import MarketWriteTemplate from 'components/MarketWrite/MarketWrite';
import { withRouter } from 'react-router-dom';

const MarketWriteConatiner = ({ store, history }) => {

  const { writeMarket } = store.marketStore;
  const { modal } = store.dialog;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('default');
  const [images, setImages] = useState([]);

  const requestWriteMarket = async () => {

    if (title.length === 0 || description.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '제목 혹은 아이디어 설명을 적어주세요!'
      });

      return;
    }

    if (email.length === 0 || phone.length === 0 || name.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '기본 정보 혹은 연락처를 적어주세요!'
      });

      return;
    }

    if (price.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '가격을 정해주세요!'
      });

      return;
    }

    if (category === 'default') {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '카테고리를 정해주세요!'
      });

      return;
    }

    let data = {
      title,
      description,
      email,
      phone,
      name,
      price,
      category
    };
  };

  return (
    <MarketWriteTemplate
      titleObj={GroupingState('title', title, setTitle)}
      descriptionObj={GroupingState('description', description, setDescription)}
      emailObj={GroupingState('email', email, setEmail)}
      phoneObj={GroupingState('phone', phone, setPhone)}
      nameObj={GroupingState('name', name, setName)}
      priceObj={GroupingState('price', price, setPrice)}
      categoryObj={GroupingState('category', category, setCategory)}
    />
  );
};

export default withRouter(inject('store')(observer(MarketWriteConatiner)));