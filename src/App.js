import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages
import HomePage from './components/pages/HomePage';
import DashboardPage from './components/pages/DashboardPage';

// Login
import SignInPage from './components/pages/SignInPage';
import NotFoundPage from './components/pages/NotFoundPage';

// Routes Wrapper
import AuthRouteWrapper from './routes/AuthRouteWrapper';

const App = () => (
  <Fragment>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <AuthRouteWrapper path='/dashboard' component={DashboardPage} />
      <AuthRouteWrapper path='/sign_in' component={SignInPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Fragment>
);

export default App;
