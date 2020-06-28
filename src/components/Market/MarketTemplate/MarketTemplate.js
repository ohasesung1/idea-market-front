import React from 'react';
import classNames from 'classnames/bind';
import style from './MarketTemplate.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(style);

const MarketTemplate = ({ children, getMoreData, title }) => {
  
  return (
    <div className={cx('MarketTemplate')}>
      <div className={cx('MarketTemplate-title')}>
        <span>{title}</span>
      </div>
      <div className={cx('MarketTemplate-marketItemTemplate')}>
        {
          children
        }
      </div>
      <div className={cx('MarketTemplate-getMoreButtonDiv')}>
        <button className={cx('MarketTemplate-getMoreButtonDiv-button')} onClick={() => getMoreData()}>상품 더 보기</button>
      </div>
    </div>
  );
};

MarketTemplate.propTypes = {
  children: PropTypes.array,
};

export default MarketTemplate;