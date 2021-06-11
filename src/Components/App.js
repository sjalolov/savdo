import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import '../css/App.css';

import Lookup from './Lookup'
import Checkout from './Checkout';
import Transaction from './Transactions';
import history from './history';


function App() {
  return (
    <Router history={history}>
        <Switch>
          {/* <Route exact path="/" component={Lookup} /> */}
          <Route path="/checkout" component={Checkout} />
          <Route path="/transaction" component={Transaction} />
        </Switch>
      </Router>
  );
}

export default App;
