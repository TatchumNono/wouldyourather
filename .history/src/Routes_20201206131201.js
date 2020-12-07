import React from "react";
import Login from "./components/Login/Login";
import MainForm from "./components/form/addQuestion";
import MainHome from "./components/Home/MainHome";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  const isLoggedIn
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute
            path='/home'
            isAuthenticated={}
            component={MainHome}
          />
          <Route path='/form' component={MainForm} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
