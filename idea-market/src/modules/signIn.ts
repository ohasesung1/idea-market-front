import { type } from "os";
import SignRepository from '../lib/api/Sign/SignRepository';

// 액션 타입 선언
const POST_SIGNIN = 'signIn/POST_SIGNIN' as const;
const POST_SIGNIN_SUCCESS = 'signIn/POST_SIGNIN_SUCCESS' as const;
const POST_SIGNIN_FAIL = 'signIn/POST_SIGNIN_FAIL' as const;

// 액션 함수 선언

export const postSignIn = (id: string, pw: string) => ({
  type: POST_SIGNIN,
  payload: {
    id,
    pw
  }
});

export const postSignInSuccess = () => ({
  type: POST_SIGNIN_SUCCESS,
  payload: {}
});

export const postSignInFail = () => ({
  type: POST_SIGNIN_FAIL,
  payload: {}
});

type SignInAction = 
| ReturnType<typeof postSignIn>
| ReturnType<typeof postSignInSuccess>
| ReturnType<typeof postSignInFail>;

export type SignIn = {
  id: string,
  pw: string,
};

type SignInState = SignIn;

const initialState: SignInState = {
  id: '',
  pw: '',
};

function signIn(state: SignInState = initialState, action: SignInAction): SignInState {
  switch (action.type) {
    case POST_SIGNIN:
      const data = action.payload;
        return SignRepository(data);
      break;
    case POST_SIGNIN_SUCCESS:
    
      break;
    case POST_SIGNIN_FAIL:
    
      break;
    default:
      break;
  }
  SignRepository.signIn(action.payload);
}

export default signIn;






