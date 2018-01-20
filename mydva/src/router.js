import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home'
import Detail from './routes/Detail'

import './router.css'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/IndexPage" exact component={IndexPage} />
        <Route path="/Detail:id" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
