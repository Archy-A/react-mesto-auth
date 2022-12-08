import React from "react";
import { Route, Redirect } from "react-router-dom";

//import Register from '../register/Register';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="./login" />
      }
    </Route>
  );
};

export default ProtectedRoute; 