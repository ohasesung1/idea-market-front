import { SignInState } from './types';
import { Dispatch } from 'redux';
import * as api from 'lib/api';

export const POST_SIGNIN_REQUEST = "signIn/POST_SIGNIN_REQUEST";
export const POST_SIGNIN_SUCCESS = "signIn/POST_SIGNIN_SUCCESS";
export const POST_SIGNIN_FAIL = "signIn/POST_SIGNIN_FAIL";

export const postSignInRequest = (payload: SignInState) => ({
  type: POST_SIGNIN_REQUEST,
  payload,
});

export const postSignInSuccess = (payload: SignInState) => ({
  type: POST_SIGNIN_SUCCESS,
  payload,
});

export const postSignInFail = (payload: SignInState) => ({
  type: POST_SIGNIN_FAIL,
  payload,
});

export const postSignIn = (request: Object) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(postSignInRequest({ loading: true }));

      const result = await api.default.signIn(request);
      const data = result.data;
      
      dispatch(postSignInSuccess({ loading: false, data }));
    } catch (error) {
      dispatch(postSignInFail({ loading: false }));
    }
  }
};
