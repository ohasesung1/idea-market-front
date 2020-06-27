import React, { useState } from 'react';
import SignInTemplate from 'components/Sign/SignInTemplate';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import SecureLS from 'secure-ls';
import sha512 from 'js-sha512';
import GroupingState from 'lib/HookState/GroupingState';
import PropTypes from 'prop-types';

const SignInContainer = ({ store, history }) => {
  const { handleSignIn } = store.sign;
  const { modal } = store.dialog;

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);

  const userLogin = async () => {
    if (id.length === 0 || pw.length === 0) {
      await modal({
        title: 'Warning!',
        stateType: 'warning',
        contents: '빈칸을 채워 주세요!'
      });

      return;
    }

    let data = {
      id,
      pw: sha512(pw)
    };

    await handleSignIn(data).
    then(async (response) => {
      if (keepLogin) {
        localStorage.setItem('idea-market-token', response.data.tokenData);
      } else {
        sessionStorage.setItem('idea-market-token', response.data.tokenData)
      }

      const ls = new SecureLS({ encodingType: 'aes' }); // user info 저장
      ls.set('user-info', response.data.member);  // user-info라는 이름으로 저장

      history.push('/');
    })
    .catch(async (error) => {
      const { status } = error.response;
      if (status === 403) {
        console.log(modal);
        
        modal({
          title: 'Error!',
          stateType: 'error',
          contents: 'id 또는 password가 맞지 않습니다.'
        });
  
        return;
      } else  if (status === 400) {
        modal({
          title: 'Warning!',
          stateType: 'warning',
          contents: '양식이 맞지 않습니다.'
        });
  
        return;
      }  else if (status === 500) {
        modal({
          title: 'Error!',
          stateType: 'error',
          contents: '서버 에러!'
        });
  
        return;
      }
    });
  };

  return (
    <SignInTemplate 
      userLogin={userLogin}
      idObj={GroupingState('id', id, setId)}
      pwObj={GroupingState('pw', pw, setPw)}
      setKeepLogin={setKeepLogin}
    />
  );
};

SignInContainer.propTypes = {
  store: PropTypes.any,
  history: PropTypes.any,
};

export default inject('store')(observer(withRouter(SignInContainer)));

