import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DetailPage from './routes/DetailPage';
import Test from './components/TableList'
import Login from './routes/Login';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path={`/detail/:name`} component={DetailPage} />
      <Route path={"/login"} component={Login} />
    </Router>
  );
}

export default RouterConfig;
