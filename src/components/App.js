import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Modal from 'containers/Common/Modal';
import * as Pages from 'pages';

function App() {
  return (
    <>
    <Switch>
        <Route 
          exact
          path="/"
          render={() => <Pages.Market/>}
        />
        <Route 
          exact
          path="/sign"
          render={() => <Pages.Sign/>}
        />
        <Route 
          exact
          path="/my_info"
          render={() => <Pages.MyInfo/>}
        />
        <Route 
          exact
          path="/market-detail"
          render={() => <Pages.MarketDetail/>}
        />
        <Route 
          exact
          path="/market-write"
          render={() => <Pages.MarketWrite/>}
        />
        <Route 
          exact
          path="/basket"
          render={() => <Pages.Basket/>}
        />
      </Switch>
      <Modal/>
    </>
  );
}

export default App;
