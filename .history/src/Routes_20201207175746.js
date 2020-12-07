import React from "react";
import Login from "./components/Login/Login";
import MainForm from "./components/Form/MainForm";
import MainHome from "./components/Home/MainHome";
import MainLeaderBoard from "./components/LeaderBoard/MainLeaderBoard";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/lead' component={MainLeaderBoard} />
          <ProtectedRoute
            path='/home'
            isAuthenticated={isLoggedIn}
            component={MainHome}
          />
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
