import React from "react";
import Login from "./components/Login/Login";
import MainForm from "./components/form/addQuestion";
import MainHome from "./components/Home/MainHome";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute
            path='/home'
            isAuthenticated={isLoggedIn}
            component={MainHome}
          />
          <ProtectedRoute
            path='/form'
            isAuthenticated={isLoggedIn}
            component={MainForm}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
