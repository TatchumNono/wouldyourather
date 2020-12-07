import React from "react";
import Login from "./components/Login/Login";
import MainForm from "./components/form/addQuestion";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
///import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/form' component={MainForm} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;