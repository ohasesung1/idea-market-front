import {
  POST_SIGNIN_REQUEST,
  POST_SIGNIN_SUCCESS,
  POST_SIGNIN_FAIL
} from "./actions";
import { Action, SignInState } from "./types";
import produce from "immer";

const initialState: SignInState = {
  loading: false,
  data: {},
};

const reducer = (state = initialState, action: Action): SignInState => {
  switch (action.type) {
    case POST_SIGNIN_REQUEST:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    case POST_SIGNIN_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
        draft.data = action.payload.data;
      });
    case POST_SIGNIN_FAIL:
      return produce(state, (draft) => {
        draft.loading = action.payload.loading;
      });
    default:
      return state;
  }
};

export default reducer;
