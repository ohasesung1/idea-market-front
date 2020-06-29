import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './BasketTemplate..scss';

const cx = classnames.bind(style);

const BasketTemplate = ({ children }) => {
  return (
    <div className={cx('BasketTemplate')}>
      <div className={cx('BasketTemplate-titleDiv')}>
        <span>장바구니</span>
      </div>
      <div className={cx('BasketTemplate-contentsDiv')}>
        {
          children
        }
      </div>
    </div>
  );
};

BasketTemplate.propTypes = {
  children: PropTypes.any,
};

export default BasketTemplate;