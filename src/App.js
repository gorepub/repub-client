import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import HomePage from './components/pages/HomePage';
import DashboardPage from './components/pages/DashboardPage';

import CallApi from './api/CallApi';

// Login
import SignIn from './components/login/SignIn';

// Routes Wrapper
import AuthRouteWrapper from './routes/AuthRouteWrapper';

const App = () => (
  <Fragment>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <AuthRouteWrapper path='/dashboard' component={DashboardPage} />
      <AuthRouteWrapper path='/sign_in' component={SignIn} />
      <AuthRouteWrapper path='/CallApi' component={CallApi} />
    </Switch>
  </Fragment>
);

export default App;
