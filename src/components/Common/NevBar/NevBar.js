import React, { useEffect } from 'react';
import classnames from 'classnames';
import style from './NevBar.scss';
import logo from 'assets/image/logo.png';
import { FaShoppingBasket } from 'react-icons/fa';
import { FiUser, FiSearch } from 'react-icons/fi';
import { withRouter } from 'react-router-dom';
import secureLs from 'secure-ls';
import TokenVerification from 'lib/Token/TokenVerification';

const cx = classnames.bind(style);

const NevBar = ({ url, history }) => {

  let loginText = '';

  const token = TokenVerification();

  if (token === 'empty') {
    loginText = '로그인';
  } else {
    loginText = '로그아웃';
  }

  const handleUrl = (url) => {

    if (url === '/sign' && loginText === '로그아웃') {
      localStorage.removeItem('idea-market-token');
      sessionStorage.removeItem('idea-market-token');
    }

    history.push(url);
  };

  return (
    <div className={cx('NevBarTemplate')}>
      <div className={cx('NevBarTemplate-loginDiv')}>
        <div className={cx('NevBarTemplate-loginDiv-loginButtonDiv')}>
  <button  className={cx('NevBarTemplate-loginDiv-loginButtonDiv-button')} onClick={() => handleUrl('/sign')}>{loginText}</button>
        </div>
        {/* <div className={cx('NevBarTemplate-loginDiv-registerButtonDiv')}>
          <button  className={cx('NevBarTemplate-loginDiv-registerButtonDiv-button')}>회원 가입</button>
        </div> */}
      </div>
      <div className={cx('NevBarTemplate-optionDiv')}>
        <div className={cx('NevBarTemplate-optionDiv-logoDiv')}>
          <img className={cx('NevBarTemplate-optionDiv-logoDiv-logo')} src={logo}/>
        </div>
        <div className={cx('NevBarTemplate-optionDiv-searchDiv')}>
          <input className={cx('NevBarTemplate-optionDiv-searchDiv-input')} />
          <FiSearch className={cx('NevBarTemplate-optionDiv-searchDiv-logo')}/>
        </div>
        <div className={cx('NevBarTemplate-optionDiv-myInfoDiv')}>
          <FiUser  className={cx('NevBarTemplate-optionDiv-myInfoDiv-logo')} />
          <span>내 정보</span>
        </div>
        <div className={cx('NevBarTemplate-optionDiv-basketDiv')}>
          <FaShoppingBasket  className={cx('NevBarTemplate-optionDiv-basketDiv-logo')} />
          <span>장바구니</span>
        </div>
      </div>
      <div className={cx('NevBarTemplate-categoryDiv')}>
        <div  className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv')}>
          <div className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv-itemDiv', {'itemDivStyle': url === '/'})}>
            홈
          </div>
          <div className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv-itemDiv')}>
            추천 상품 보기
          </div>
          <div className={cx('NevBarTemplate-categoryDiv-itemTemplateDiv-itemDiv')}>
            카테고리 별 상품 보기
          </div>
        </div>
      </div>
    </div>
  );
};

NevBar.propTypes = {

};

export default withRouter(NevBar);