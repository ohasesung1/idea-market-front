import React, { useEffect } from 'react';
import classnames from 'classnames';
import style from './NevBar.scss';
import logo from 'assets/image/logo.png';
import { FaShoppingBasket } from 'react-icons/fa';
import { FiUser, FiSearch } from 'react-icons/fi';
import { withRouter } from 'react-router-dom';
import { inject } from 'mobx-react';
import TokenVerification from 'lib/Token/TokenVerification';

const cx = classnames.bind(style);

const NevBar = ({ url, history, store }) => {
  const { modal } = store.dialog;

  let loginText = '';

  const token = TokenVerification();

  if (token === 'empty') {
    loginText = '로그인';
  } else {
    loginText = '로그아웃';
  }

  const handleUrl = async (url) => {

    if (url === '/sign' && loginText === '로그아웃') {
      localStorage.removeItem('idea-market-token');
      sessionStorage.removeItem('idea-market-token');
    }

    if (url === '/my_info' && token === 'empty') {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '로그인 후 이용해주세요!'
      });

      return;
    }

    if (url === '/market-write' && token === 'empty') {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '로그인 후 이용해주세요!'
      });

      return;
    }

    history.push(url);
  };

  return (
    <div className={cx('NevBarTemplate')}>
      <div className={cx('NevBarTemplate-loginDiv')}>
        <div className={cx('NevBarTemplate-loginDiv-loginButtonDiv')}>
          <button  className={cx('NevBarTemplate-loginDiv-loginButtonDiv-button')} onClick={() => handleUrl('/sign')}>{loginText}</button>
        </div>
      </div>
      <div className={cx('NevBarTemplate-optionDiv')}>
        <div className={cx('NevBarTemplate-optionDiv-logoDiv')}>
          <img className={cx('NevBarTemplate-optionDiv-logoDiv-logo')} src={logo} onClick={() => handleUrl('/')}/>
        </div>
        <div className={cx('NevBarTemplate-optionDiv-searchDiv')}>
          <input className={cx('NevBarTemplate-optionDiv-searchDiv-input')} />
          <FiSearch className={cx('NevBarTemplate-optionDiv-searchDiv-logo')}/>
        </div>
        <div className={cx('NevBarTemplate-optionDiv-myInfoDiv')}>
          <FiUser  className={cx('NevBarTemplate-optionDiv-myInfoDiv-logo')} onClick={() => handleUrl('/my_info')}/>
          <span>내 정보</span>
        </div>
        <div className={cx('NevBarTemplate-optionDiv-basketDiv')}>
          <FaShoppingBasket  className={cx('NevBarTemplate-optionDiv-basketDiv-logo')} onClick={() => handleUrl('/basket')}/>
          <span>장바구니</span>
        </div>
      </div>
      <div className={cx('NevBarTemplate-categoryDiv')}>
        <div  className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv')}>
          <div className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv-itemDiv', {'itemDivStyle': url === '/'})} onClick={() => handleUrl('/')}>
            홈
          </div>
          {/* <div className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv-itemDiv', {'itemDivStyle': url === '/best'})} onClick={() => handleUrl('/best')}>
            인기 상품 보기
          </div>
          <div className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv-itemDiv', {'itemDivStyle': url === '/category'})} onClick={() => handleUrl('/category')}>
            카테고리 별 상품 보기
          </div> */}
          <div className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv-itemDiv', {'itemDivStyle': url === '/market-write'})} onClick={() => handleUrl('/market-write')}>
            아이디어 등록 하기
          </div>
        </div>
      </div>
    </div>
  );
};

NevBar.propTypes = {

};

export default inject('store')(withRouter(NevBar));