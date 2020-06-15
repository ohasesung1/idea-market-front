import * as React from "react";
import { Switch, Route } from "react-router";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from 'modules';

interface RootProps {}
const Root: React.SFC<RootProps> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
