import React from 'react';
import classnames from 'classnames/bind';
import style from './SignInTemplate.scss';
import logo from 'assets/image/logo.png';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const cx = classnames.bind(style);

const SignInTemplate = ({ userLogin, idObj, pwObj, setKeepLogin, history }) => {

  const { id, setId } = idObj;
  const { pw, setPw } = pwObj;

  const handleUrl = (url) => {
    history.push(url);
  };

  return (
    <div className={cx('SignInTemplate')}>
      <div className={cx('SignInTemplate-logoDiv')}>
        <img className={cx('SignInTemplate-logoDiv-logo')} src={logo} onClick={() => handleUrl('/')}/>
      </div>
      <div className={cx('SignInTemplate-loginDiv')}>
        <div className={cx('SignInTemplate-loginDiv-loginTextDiv')}>
          <span>로그인 하기</span>
        </div>
        <div className={cx('SignInTemplate-loginDiv-inputDiv')}>
          <input className={cx('SignInTemplate-loginDiv-inputDiv-inputStyle')} type={'text'} placeholder={'ID'} value={id} onChange={(e) => setId(e.target.value)}/>
        </div>
        <div className={cx('SignInTemplate-loginDiv-inputDiv')}>
          <input className={cx('SignInTemplate-loginDiv-inputDiv-inputStyle')} type={'password'}  placeholder={'PASSWORD'} value={pw} onChange={(e) => setPw(e.target.value)}/>
        </div>
        <div className={cx('SignInTemplate-loginDiv-optionButtonsDiv')}>
          <input className={cx('SignInTemplate-loginDiv-optionButtonsDiv-inputStyle')} type={'checkbox'} onChange={(e) => setKeepLogin(e.target.value)}/>
          <span>로그인 유지</span>
        </div>
        <div className={cx('SignInTemplate-loginDiv-loginButtonDiv')}>
          <button className={cx('SignInTemplate-loginDiv-loginButtonDiv-buttonStyle')} onClick={() => userLogin()}>로그인</button>
        </div>
        <div className={cx('SignInTemplate-loginDiv-registerButtonDiv')}>
        <button className={cx('SignInTemplate-loginDiv-registerButtonDiv-buttonStyle')}>회원 가입</button>
        </div>
      </div>
    </div>
  );
};

SignInTemplate.propTypes = {
  userLogin: PropTypes.func,
  idObj: PropTypes.object,
  pwObj: PropTypes.object,
};

export default withRouter(SignInTemplate);
