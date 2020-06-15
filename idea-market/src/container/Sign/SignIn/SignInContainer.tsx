import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import { postSignInRequest } from 'modules/Sign/SignIn';

function SignInContainer(props: any) {
  const dispatch = useDispatch();

  const store = useSelector(state => state);

  const onLogin = () => {
    dispatch(postSignInRequest({
      loading: true,
      data: {
        id: '',
        pw: '',
      },
    }));
  }

  return (
    <div>
      
    </div>
  );
}

export default SignInContainer;
