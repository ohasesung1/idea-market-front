import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import style from './SignTemplate.scss';

const cx = classnames.bind(style);

const SignTemplate = ({ children }) => {
  return (
    <div className={cx('SignTemplate')}>
      <div className={cx('SignTemplate-contentsBox')}>
        {children}
      </div>
    </div>
  );
};

SignTemplate.propTypes = {

};

export default SignTemplate;