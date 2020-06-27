import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import SignTemplate from 'components/Sign/SignTemplate';
import SignInContainer from 'containers/Sign/SignIn/SignInContainer';

const SignContainer = ({ store }) => {
  const [isLogin, setIsLogin] = useState(true);


  return (
    <SignTemplate>
      {
        isLogin ?
        <SignInContainer/>
        : <></>
      }
    </SignTemplate>
  );
};

SignContainer.propTypes = {

};

export default withRouter(inject('store')(observer(SignContainer)));