import React, { useEffect } from 'react';
import PropTypes  from 'prop-types';
import classNames from 'classnames/bind';
import { withRouter } from 'react-router-dom';
import style from './PageTemplate.scss';
import NevBar from 'components/Common/NevBar';
import Footer from 'components/Common/Footer';

const cx = classNames.bind(style);

const PageTemplate = ({ url, children, history }) => {
    
  return (
    <div className={cx('PageTemplate')}>
      <div className={cx('PageTemplate-header')}>
        <div className={cx('PageTemplate-header-bannerDiv')}>
          <div className={cx('PageTemplate-header-bannerDiv-banner')}>
            <span>아이디어를 사고파는 쇼핑몰 "브레인"에 오신 것을 환영합니다!</span>
          </div>
        </div>
        <NevBar url={url}/>
      </div>
      <div className={cx('PageTemplate-contents')}>
        {children}
      </div>
      <div className={cx('PageTemplate-bottom')}>
        <Footer/>
      </div>
    </div>
  );
};

PageTemplate.propTypes = {
  url: PropTypes.string,
  children: PropTypes.node,
  history: PropTypes.object
};

export default withRouter(PageTemplate);
