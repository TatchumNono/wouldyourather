import React from "react";
import Main from "./components/Main/Main";
import MainForm from "./components/form/addQuestion";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/form' component={MainForm} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
