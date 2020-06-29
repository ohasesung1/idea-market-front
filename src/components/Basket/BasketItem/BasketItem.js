import React from 'react';
import classnames from 'classnames/bind';
import style from './BasketItem.scss';

const cx = classnames.bind(style);

const BasketItem = ({ item }) => {
  return (
    <div className={cx('BasketItemTemplate')}>
      
    </div>
  );
};

export default BasketItem;