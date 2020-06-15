import defaultApi from "../defaultApi";

export const sign = {
  /* auth login */
  signIn: (request: Object) =>
    defaultApi.post(`auth/login`, request),
  
};

export default sign;