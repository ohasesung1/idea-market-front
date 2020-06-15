export interface SignInState {
  message?: string;
  data?: {
    id: string,
    pw: string,
  };
  loading?: boolean;
}

export interface Action {
  type?: string;
  message: string;
  payload: {
    data: ObjectTypes;
    loading: boolean;
  }
}

export interface ObjectTypes {
  tokenData: string;
}