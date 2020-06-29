import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import style from './BasketTemplate..scss';

const cx = classnames.bind(style);

const BasketTemplate = ({ children }) => {
  return (
    <div className={cx('BasketTemplate')}>
      {
        children
      }
    </div>
  );
};

BasketTemplate.propTypes = {
  children: PropTypes.any,
};

export default BasketTemplate;