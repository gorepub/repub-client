import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthRouteWrapper = ({ isAuthenticate, redirect, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
        if (isAuthenticate) {
          return <Component {...props} />
        } else {
          return <Redirect to={redirect} />
        }
      }
    }
  />
);

AuthRouteWrapper.defaultProps = {
  isAuthenticate: true,
  redirect: '/',
};

AuthRouteWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticate: PropTypes.bool,
  redirect: PropTypes.string,
};

export default AuthRouteWrapper;
